import { Button } from "../components/ui/button";
import MembershipComparison from "../components/membership-comparison";
import MembershipTierCard from "../components/membership-tier-card";

export default function MembershipPage() {
  const membershipTiers = [
    {
      name: "Starter Community",
      subtitle: "DIY Tier",
      entryFee: 0,
      monthlyFee: 49,
      description: "Perfect for individuals looking to join our community and access basic resources.",
      features: ["Community Access", "Basic Perks"],
      buttonVariant: "outline" as const,
    },
    {
      name: "Prototype",
      subtitle: "DIY Tier",
      entryFee: 2000,
      monthlyFee: 499,
      description: "Ideal for those who want to build their project with guided support and resources.",
      features: ["Basic & Pro Perks", "Tech Stack Setup", "Video Lessons", "Ideation Support"],
      buttonVariant: "outline" as const,
      popular: true,
    },
    {
      name: "MVP",
      subtitle: "Client Tier",
      entryFee: 5000,
      monthlyFee: 1999,
      description: "For startups ready to build their minimum viable product with expert guidance.",
      features: [
        "Tech Support",
        "Team Formation Support",
        "Product Feedback",
        "Investor Connections",
        "GTM Strategy Support",
      ],
      buttonVariant: "outline" as const,
    },
    {
      name: "Scale",
      subtitle: "Client Tier",
      entryFee: 12000,
      monthlyFee: 4999,
      description: "Comprehensive support for startups ready to scale their business and operations.",
      features: ["CTO-as-a-Service", "Sales Pipeline & Automation", "Company Showcase", "Priority Investment"],
      buttonVariant: "default" as const,
    },
  ]

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 border-b border-white/10 animate-fade-in">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Build City Membership</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/80">
            Join our ecosystem and build, plan, and prototype faster than ever with AI-powered tools and community
            support.
          </p>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto animate-fade-in-delay">
        <h2 className="text-3xl font-bold text-center mb-12">Choose Your Membership Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {membershipTiers.map((tier) => (
            <MembershipTierCard key={tier.name} tier={tier} />
          ))}
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10 animate-fade-in-delay-2">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Membership Comparison</h2>
          <MembershipComparison tiers={membershipTiers} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10 animate-fade-in-delay-2">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to accelerate your project?</h2>
          <p className="text-xl text-white/80 mb-8">
            Join Build City today and get access to our ecosystem of AI tools, resources, and community support.
          </p>
          <div className="flex justify-center">
            <Button size="lg" variant="default" className="bg-white text-black hover:bg-white/90" asChild>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSebs4h31ju2qrJ2ElC-v_W9eJRMEgK34_pT_NmtfXPAok-BvA/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
              >
                Interested?
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
