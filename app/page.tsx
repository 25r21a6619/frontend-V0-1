"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  MapPin,
  Clock,
  QrCode,
  ArrowRight,
  Store,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";

const steps = [
  {
    icon: MapPin,
    title: "Browse Shops",
    description:
      "Explore nearby shops and their menus from the comfort of your browser.",
  },
  {
    icon: Clock,
    title: "Choose Pickup Time",
    description:
      "Select a convenient time slot so your order is ready when you arrive.",
  },
  {
    icon: QrCode,
    title: "Show QR & Collect",
    description:
      "Present your QR code at the counter and pick up without waiting in line.",
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Zero Wait Time",
    description: "Your order is prepared before you arrive. Walk in, grab, go.",
  },
  {
    icon: Store,
    title: "Support Local Shops",
    description:
      "Discover and order from bakeries, cafes, grocers, and more in your area.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Pickup",
    description:
      "Track your order status in real-time and know exactly when it is ready.",
  },
  {
    icon: Users,
    title: "Shopkeeper Dashboard",
    description:
      "Shop owners manage incoming orders, update status, and streamline fulfillment.",
  },
];

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
              Pre-Order & Pickup
            </p>
            <h1 className="text-balance text-4xl font-extrabold tracking-tight text-foreground lg:text-6xl">
              Skip the line. Shop smarter.
            </h1>
            <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Smartfetch lets you pre-order from local shops, choose a pickup
              time, and collect your items with a simple QR code -- no waiting
              required.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="text-base font-semibold px-8"
                asChild
              >
                <Link href="/customer/shops">
                  Browse Shops
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base font-semibold px-8 bg-transparent"
                asChild
              >
                <Link href="/shopkeeper/login">Shopkeeper Portal</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-border bg-card py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
              How it works
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Three simple steps from browsing to pickup.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {steps.map((step, i) => (
              <div key={step.title} className="flex flex-col items-center text-center">
                <div className="relative mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                  <step.icon className="h-7 w-7 text-primary" />
                  <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
              Why Smartfetch?
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Built for customers who value their time and shopkeepers who want
              happier workflows.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <Card key={b.title} className="border-border">
                <CardContent className="flex flex-col gap-3 p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                    <b.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{b.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {b.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-primary/5 py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground lg:text-3xl">
            Ready to skip the line?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground leading-relaxed">
            Start browsing shops now and place your first pre-order in seconds.
          </p>
          <div className="mt-8">
            <Button
              size="lg"
              className="text-base font-semibold px-10"
              asChild
            >
              <Link href="/customer/shops">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
