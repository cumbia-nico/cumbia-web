import Plan from "@/assets/icon/plan.svg"
import Thinking from "@/assets/icon/thinking.svg"
import SEO from "@/assets/icon/filter.svg"
import Business from "@/assets/icon/business.svg"
import Brand from "@/assets/icon/brand.svg"
import Development from "@/assets/icon/development.svg"

// ADV PHOTO
import adv_plan from "@/assets/image/service/service-1.jpg"
import adv_thinking from "@/assets/image/service/service-2.jpg"
import adv_seo from "@/assets/image/service/service-3.jpg"
import adv_business from "@/assets/image/service/service-4.jpg"
import adv_brand from "@/assets/image/service/service-5.jpg"
import adv_team from "@/assets/image/service/service-6.jpg"

const service = [
    {
        name: "Consultant Plan",
        title: "Our Consultant Plan offers a strategic approach to your business challenges. We provide tailored solutions that foster growth and efficiency in your organization.",
        photo: `${Plan}`,
        adv_photo: adv_plan,
        left: true,
        id: 1,
    },
    {
        name: "Design Thinking",
        title: "Our Design Thinking service employs an innovative approach to problem-solving. We help you explore and evaluate creative ideas for tangible business outcomes.",
        photo: `${Thinking}`,
        adv_photo: adv_thinking,
        left: false,
        id: 2,
    },
    {
        name: "SEO Marketing",
        title: "With our SEO Marketing service, we ensure your business gains online visibility. We utilize proven strategies to increase traffic, engagement, and conversions on your site.",
        photo: `${SEO}`,
        adv_photo: adv_seo,
        left: true,
        id: 3,
    },
    {
        name: "Business Advisor",
        title: "Our Business Advisors provide expert insights and actionable strategies to drive your business forward. We offer advice on management, operations, and finance to ensure your success.",
        photo: `${Business}`,
        adv_photo: adv_business,
        left: false,
        id: 4,
    },
    {
        name: "Brand Personal",
        title: "Our Brand Personal service helps develop a unique brand identity that resonates with your target audience. We work on brand positioning, voice, and visual identity to differentiate you from competitors.",
        photo: `${Brand}`,
        adv_photo: adv_brand,
        left: true,
        id: 5,
    },
    {
        name: "Development",
        title: "Our Development team provides top-notch technology solutions to propel your business. From custom software to mobile app development, we create platforms that increase efficiency and engagement.",
        photo: `${Development}`,
        adv_photo: adv_team,
        left: false,
        id: 6,
    },
];


export default service