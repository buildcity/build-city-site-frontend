import { Button } from "../components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Check } from "lucide-react";

interface MembershipTierProps {
  tier: {
    name: string
    subtitle: string
    entryFee: number
    monthlyFee: number
    description: string
    features: string[]
    buttonVariant: "default" | "outline"
    popular?: boolean
  }
}

export default function MembershipTierCard({ tier }: MembershipTierProps) {
  // Function to get all features for this tier, including from previous tiers
  const getAllFeatures = () => {
    const tiers = [
      {
        name: "Starter Community",
        features: ["Community Access", "Basic Perks"],
      },
      {
        name: "Prototype",
        features: ["Community Access", "Basic & Pro Perks", "Tech Stack Setup", "Video Lessons", "Ideation Support"],
      },
      {
        name: "MVP",
        features: [
          "Community Access",
          "Basic & Pro Perks",
          "Tech Stack Setup",
          "Video Lessons",
          "Ideation Support",
          "Tech Support",
          "Team Formation Support",
          "Product Feedback",
          "Investor Connections",
          "GTM Strategy Support",
        ],
      },
      {
        name: "Scale",
        features: [
          "Community Access",
          "Basic & Pro Perks",
          "Tech Stack Setup",
          "Video Lessons",
          "Ideation Support",
          "Tech Support",
          "Team Formation Support",
          "Product Feedback",
          "Investor Connections",
          "GTM Strategy Support",
          "CTO-as-a-Service",
          "Sales Pipeline & Automation",
          "Company Showcase",
          "Priority Investment",
        ],
      },
    ]

    const tierIndex = tiers.findIndex((t) => t.name === tier.name)
    return tiers[tierIndex].features
  }

  const allTierFeatures = getAllFeatures()

  return (
    <Card
      className={`border ${
        tier.popular ? "border-white" : "border-white/20"
      } overflow-hidden h-full flex flex-col transition-all duration-300 hover:border-white bg-black`}
    >
      <CardHeader className="pb-6 relative">
        {tier.popular && (
          <Badge className="absolute top-4 right-4 bg-white text-black hover:bg-white/90">Most Popular</Badge>
        )}
        <h3 className="text-2xl font-bold">{tier.name}</h3>
        <p className="text-sm text-white/60">{tier.subtitle}</p>
        <div className="mt-4">
          <div className="flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl font-bold text-white/80">Pricing</div>
              <div className="text-lg font-semibold text-white/60">Coming Soon</div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-white/80 mb-6">{tier.description}</p>
        <h4 className="font-semibold mb-4">Includes:</h4>
        <ul className="space-y-3">
          {allTierFeatures.map((feature) => (
            <li key={feature} className="flex items-start">
              <Check className="h-5 w-5 text-white mr-2 flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="pt-4">
        <Button
          variant={tier.buttonVariant}
          className={`w-full ${
            tier.buttonVariant === "default"
              ? "bg-white text-black hover:bg-white/90"
              : "border-white text-white hover:bg-white/10"
          }`}
          asChild
        >
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSebs4h31ju2qrJ2ElC-v_W9eJRMEgK34_pT_NmtfXPAok-BvA/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
          >
            Interested?
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}
