import { Button } from "../components/ui/button";
import { PageLayout } from "../components/PageLayout";
import MembershipComparison from "../components/membership-comparison";
import MembershipTierCard from "../components/membership-tier-card";
import { membershipTiers } from "../data/membership";

export default function MembershipPage() {
  return (
    <PageLayout>
      <div className="min-h-screen bg-black text-white">
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
            <div className="flex justify-center space-x-4">
              <Button size="lg" variant="default" className="bg-white text-black hover:bg-white/90" asChild>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSebs4h31ju2qrJ2ElC-v_W9eJRMEgK34_pT_NmtfXPAok-BvA/viewform?usp=dialog"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Interested?
                </a>
              </Button>
              <Button size="lg" className="bg-black text-white border border-white hover:bg-white hover:text-black" asChild>
                <a
                  href="https://billing.stripe.com/p/login/dRm00jcnEa294kFfZLabK00"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  My Plan
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  )
}
