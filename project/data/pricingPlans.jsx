const pricingPlans = [
    {
        id: "free",
        title: "Free Plan",
        price: "$0",
        interval: "/month",
        unit: "per project",
        isPopular: false,
        buttonText: "Get Started",
        footerText: null,
        features: [
            { included: true, text: "Up to 100 notifications/month" },
            { included: true, text: "Connect up to 2 data sources" },
            { included: true, text: "Basic notification thresholds" },
            { included: true, text: "Mobile app access" },
            { included: false, text: "Daily, weekly, and weekly summaries" },
            { included: false, text: "AI-powered alerts" },
            { included: false, text: "Historical data (limited to 3 months)" },
        ]
    },
    {
        id: "business",
        title: "Business Plan",
        price: "$9.99",
        interval: "/month",
        unit: "per project",
        isPopular: true,
        buttonText: "Get Started",
        footerText: "No credit card required. 14-day free trial.",
        features: [
            { included: true, text: "Unlimited notifications" },
            { included: true, text: "Connect unlimited data sources" },
            { included: true, text: "Customizable notification thresholds" },
            { included: true, text: "Mobile app access" },
            { included: true, text: "Daily, weekly, and monthly summaries" },
            { included: true, text: "AI-powered alerts" },
            { included: true, text: "Historical data (up to 12 months)" },
        ]
    },
];

export default pricingPlans;