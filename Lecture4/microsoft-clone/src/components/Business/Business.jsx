import Card from '../Card/Card'
import './Business.css'

const Business = () => {
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
        {
            title: "Copilot is your AI companion",
            subtitle: "Always by your side, ready to support you whenever and wherever you need it.",
            btnText: "Download the Copilot app"
        }
    ]
  return (
    <div className='business-container'>
        <h1 className="business-title">For business</h1>
        <div className="business-cards">
        {infoCards.map((card,index) => (
            <Card key={index} title={card.title} subtitle={card.subtitle} btnText={card.btnText}/>
        ))}
        </div>
    </div>
  )
}

export default Business