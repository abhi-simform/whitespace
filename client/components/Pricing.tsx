import React from "react";

export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "Per month",
      description: "Capture ideas and find them quickly",
      features: [
        "Sync unlimited devices",
        "10 GB monthly uploads",
        "200 MB max. note size",
        "Customize Home dashboard and access extra widgets",
        "Connect primary Google Calendar account",
        "Add due dates, reminders, and notifications to your tasks",
      ],
      buttonText: "Get Started",
      buttonStyle:
        "border border-whitepace-yellow bg-transparent text-whitepace-text-dark hover:bg-whitepace-yellow",
      highlighted: false,
    },
    {
      name: "Personal",
      price: "$11.99",
      period: "Per month",
      description: "Keep home and family on track",
      features: [
        "Sync unlimited devices",
        "10 GB monthly uploads",
        "200 MB max. note size",
        "Customize Home dashboard and access extra widgets",
        "Connect primary Google Calendar account",
        "Add due dates, reminders, and notifications to your tasks",
      ],
      buttonText: "Get Started",
      buttonStyle: "bg-whitepace-light-blue text-white hover:bg-blue-600",
      highlighted: true,
    },
    {
      name: "Organization",
      price: "$49.99",
      period: "Per month",
      description: "Capture ideas and find them quickly",
      features: [
        "Sync unlimited devices",
        "10 GB monthly uploads",
        "200 MB max. note size",
        "Customize Home dashboard and access extra widgets",
        "Connect primary Google Calendar account",
        "Add due dates, reminders, and notifications to your tasks",
      ],
      buttonText: "Get Started",
      buttonStyle:
        "border border-whitepace-yellow bg-transparent text-whitepace-text-dark hover:bg-whitepace-yellow",
      highlighted: false,
    },
  ];

  return (
    <section className="py-20 lg:py-32 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-whitepace-text-dark font-inter text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
            Choose
            <span className="text-whitepace-text-dark"> Your Plan</span>
          </h2>
          <p className="text-whitepace-text-dark font-inter text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto">
            Whether you want to get organized, keep your personal life on track,
            or boost workplace productivity, Evernote has the right plan for
            you.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-lg p-8 lg:p-10 ${
                plan.highlighted
                  ? "bg-whitepace-blue text-white"
                  : "bg-white border border-gray-200"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-whitepace-yellow text-whitepace-text-dark px-6 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3
                  className={`font-inter text-2xl font-bold mb-4 ${
                    plan.highlighted ? "text-white" : "text-whitepace-text-dark"
                  }`}
                >
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span
                    className={`font-inter text-4xl lg:text-5xl font-bold ${
                      plan.highlighted
                        ? "text-white"
                        : "text-whitepace-text-dark"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`font-inter text-lg ml-2 ${
                      plan.highlighted ? "text-white/80" : "text-gray-600"
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>
                <p
                  className={`font-inter text-lg ${
                    plan.highlighted ? "text-white/90" : "text-gray-600"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg
                      className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${
                        plan.highlighted
                          ? "text-whitepace-yellow"
                          : "text-whitepace-light-blue"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span
                      className={`font-inter ${
                        plan.highlighted
                          ? "text-white"
                          : "text-whitepace-text-dark"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full font-inter text-lg font-medium px-8 py-4 rounded-lg transition-colors duration-200 ${plan.buttonStyle}`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
