import React, { useState } from "react";
import Card from "../Card/Card";
import ContentSub from "../ContentSub/ContentSub";

const Subscribe = () => {
  // تعيين البطاقة الثانية (index = 1) كـ active افتراضيًا
  const [activeCard, setActiveCard] = useState(1);

  const handleCardClick = (id) => {
    setActiveCard(id); // تحديث البطاقة النشطة عند النقر
  };

  const content = [
    {
      title: "free forever",
      desc: "Best for personal use",
      price: "Free",
      nameBtn: "For Free",
      headtitle: "Everything in Unlimited plus",
      list: [
          '100MB Storage',
          'Unlimited Tasks',
          'Collaborative Docs',
          'Whiteboards',
          'Everything View'
      ]
    },
    {
      title: "unlimited",
      desc: "Best for small teams",
      price: "20$",
      nameBtn: "Get Started",
      headtitle: "Everything in Free plus",
      list: [
            'Unlimited Storage',
            'Unlimited Dashboards',
            'Guests with Permissions',
            'Unlimited Integrations',
            'Unlimited Custom Fields',
            'Teams (User Groups)',
            'Form View',
            'AI Compatible',
        ]
      
    },
    {
        title: "business",
        desc: "Best for mid-sized teams",
        price: "26$",
        nameBtn: "Get Started",
        headtitle: "Everything in Free and Unlimited plus",
        list: [
          'Google SSO',
          'Unlimited Teams',
          'Advanced Time Tracking',
          'Granular Time Estimates',
          'Goal Folders',
          'Unlimited Whiteboards',
      ]
        
    }
  ];
    
  return (
    <div className="subscribe">
        <div className="buttons">
            <button className="year">Yearly</button>
            <button className="month">Monthly</button>
        </div>
        <div className="cards">
             {[0, 1, 2].map((index) => (
        <Card
          key={index}
          className={activeCard === index ? "active" : ""}
          onClick={() => handleCardClick(index)} // تعيين البطاقة النشطة
        >
          <ContentSub isActive={activeCard === index} title={content[index].title} desc={content[index].desc} price={content[index].price } nameBtn={content[index].nameBtn} headtitle={content[index].headtitle} list={content[index].list}/>
        </Card>
      ))}
        </div>
     
    </div>
  );
};

export default Subscribe;
