import './Explore.css'
import Card from '../Card/Card'

const Explore = () => {
    const infoCards = [
        {
            title: "Save up to $700.00 on select Surface Laptop, Copilot+ PC",
            subtitle: "Study smarter with an AI-powered companion built for all-day battery life.",
            btnText: "Shop Surface Laptop, Copilot+ PC"
        },
        {
            title: "Surface Pro for Business, Copilot+ PC | Intel",
            subtitle: "Ultra-versatile and built with Intel® Core™ Ultra processors (Series 2) that power AI experiences to amplify your teams productivity.",
            btnText: "Shop now"
        },
        {
            title: "Trade in and get up to $180 for your used console",
            subtitle: "Buy a new Xbox Series X or S and get cash back on an eligible trade-in. Limited-time offer.",
            btnText: "Shop Xbox consoles"
        },
    ]
  return (
    <div className='explore-container'>
        <h1 className="explore-title">Explore more about AI and Copilot</h1>
        <div className="explore-cards">
        {infoCards.map((card,index) => (
            <Card key={index} title={card.title} subtitle={card.subtitle} btnText={card.btnText}/>
        ))}
        </div>
    </div>
  )
}

export default Explore