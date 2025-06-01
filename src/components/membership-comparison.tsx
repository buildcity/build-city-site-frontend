import { Check, Minus } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";


interface MembershipComparisonProps {
  tiers: {
    name: string
    subtitle: string
    features: string[]
  }[]
}

export default function MembershipComparison({ tiers }: MembershipComparisonProps) {
  // All unique features across all tiers
  const allFeatures = Array.from(new Set(tiers.flatMap((tier) => tier.features)))

  // Organize features by category
  const featureCategories = {
    "Community & Access": ["Community Access", "Basic Perks", "Basic & Pro Perks"],
    "Development Support": [
      "Tech Stack Setup",
      "Video Lessons",
      "Ideation Support",
      "Tech Support",
      "Product Feedback",
    ],
    "Business Growth": [
      "Team Formation Support",
      "Investor Connections",
      "GTM Strategy Support",
      "CTO-as-a-Service",
      "Sales Pipeline & Automation",
      "Company Showcase",
      "Priority Investment",
    ],
  }

  // Get tier index by name
  const getTierIndex = (tierName: string) => {
    return tiers.findIndex((tier) => tier.name === tierName)
  }

  // Check if a tier includes a specific feature based on tiered structure
  const tierHasFeature = (tier: any, feature: string) => {
    const tierIndex = getTierIndex(tier.name)

    // Special handling for "All X features" text
    if (feature === "All Prototype features" && tier.name === "Prototype") {
      return false
    }
    if (feature === "All MVP features" && (tier.name === "Prototype" || tier.name === "MVP")) {
      return false
    }

    // Check if the current tier explicitly includes this feature
    if (tier.features.includes(feature)) {
      return true
    }

    // Check if any previous tier includes this feature (for tiered structure)
    for (let i = 0; i < tierIndex; i++) {
      if (tiers[i].features.includes(feature)) {
        return true
      }
    }

    // Handle the "All X features" references
    if (tier.name === "MVP" && feature.includes("Prototype features")) {
      return true
    }
    if (tier.name === "Scale" && (feature.includes("Prototype features") || feature.includes("MVP features"))) {
      return true
    }

    return false
  }

  return (
    <div className="overflow-x-auto">
      <Table className="w-full border-collapse">
        <TableHeader>
          <TableRow className="border-b border-white/20">
            <TableHead className="w-1/5 bg-black/40">Features</TableHead>
            {tiers.map((tier) => (
              <TableHead key={tier.name} className="w-1/5 text-center bg-black/40">
                {tier.name}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {Object.entries(featureCategories).map(([category, features]) => (
            <>
              <TableRow key={category} className="bg-black/60 border-t border-white/20">
                <TableCell colSpan={5} className="font-bold text-lg py-4 text-white">
                  {category}
                </TableCell>
              </TableRow>
              {features
                .filter((feature) => allFeatures.includes(feature))
                .map((feature) => (
                  <TableRow key={feature} className="border-t border-white/10">
                    <TableCell className="pl-6">{feature}</TableCell>
                    {tiers.map((tier) => (
                      <TableCell key={`${tier.name}-${feature}`} className="text-center">
                        {tierHasFeature(tier, feature) ? (
                          <Check className="h-5 w-5 text-white mx-auto" />
                        ) : (
                          <Minus className="h-5 w-5 text-white/30 mx-auto" />
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
            </>
          ))}
          <TableRow className="bg-black/60 border-t border-white/20">
            <TableCell className="font-bold text-lg py-4 text-white">Pricing</TableCell>
            {tiers.map((tier) => (
              <TableCell key={`${tier.name}-pricing`} className="text-center">
                <div className="font-semibold text-white/80">Coming Soon</div>
                <div className="text-sm text-white/60">Pricing TBA</div>
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}
