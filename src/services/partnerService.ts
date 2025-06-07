import { supabase } from '../lib/supabase'
import type { Database } from '../lib/supabase'

export type Partner = Database['public']['Tables']['partners']['Row']

export async function getPartners(): Promise<Partner[]> {
  const { data, error } = await supabase
    .from('partners')
    .select('*')
    .order('id', { ascending: true })

  if (error) {
    console.error('Error fetching partners:', error)
    throw new Error('Failed to fetch partners')
  }

  return data || []
}

export async function getPartnerById(id: number): Promise<Partner | null> {
  const { data, error } = await supabase
    .from('partners')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    console.error('Error fetching partner:', error)
    return null
  }

  return data
}

export async function createPartner(partner: Database['public']['Tables']['partners']['Insert']): Promise<Partner | null> {
  const { data, error } = await supabase
    .from('partners')
    .insert([partner])
    .select()
    .single()

  if (error) {
    console.error('Error creating partner:', error)
    return null
  }

  return data
}

export async function updatePartner(id: number, partner: Database['public']['Tables']['partners']['Update']): Promise<Partner | null> {
  const { data, error } = await supabase
    .from('partners')
    .update(partner)
    .eq('id', id)
    .select()
    .single()

  if (error) {
    console.error('Error updating partner:', error)
    return null
  }

  return data
}

export async function deletePartner(id: number): Promise<boolean> {
  const { error } = await supabase
    .from('partners')
    .delete()
    .eq('id', id)

  if (error) {
    console.error('Error deleting partner:', error)
    return false
  }

  return true
}
