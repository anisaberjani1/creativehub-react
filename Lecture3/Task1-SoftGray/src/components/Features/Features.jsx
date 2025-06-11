import './Features.css'
import FeaturesCard from "../FeaturesCard/FeaturesCard"

const Features = () => {
    const features = ["Consulting", "Developing", "Designing", "Analysis"]
  return (
    <div className="features-content">
        {features.map((feature) => {
            return <FeaturesCard key={feature} featureTitle={feature}/>
        })}
    </div>
  )
}

export default Features