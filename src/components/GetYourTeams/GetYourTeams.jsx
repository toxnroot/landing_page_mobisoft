import Card from "../Card/Card";
import User from "../User/User";

const GetYourTeams = () => {
    return (
        <div className="GetYourTeams-container">
            <div className="GetYourTeams">
                <h1>Get your teams working together more closely, even if they’re far apart</h1>
                <p> brainstorm ideas with Whiteboards, and draft plans together with collaborative Docs.</p>
            </div>
            <div className="users">
                <Card children={<User image={"/abdalazez.jpg"} name={"Abdeleziz Hamdy"} job={"UI/UX Designer"} bio={"Sure Still Waiting"}/>}/>
                <Card children={<User image={"/abdalazez.jpg"} name={"Abdeleziz Hamdy"} job={"UI/UX Designer"} bio={"Sure Still Waiting"}/>}/>
                <Card children={<User image={"/abdalazez.jpg"} name={"Abdeleziz Hamdy"} job={"UI/UX Designer"} bio={"Sure Still Waiting"}/>}/>
                <Card children={<User image={"/abdalazez.jpg"} name={"Abdeleziz Hamdy"} job={"UI/UX Designer"} bio={"Sure Still Waiting"}/>}/>
                
            </div>
            <div className="sendmessage">
                <input className="msg" placeholder="Send a message" type="text" />
                <button className="send">Send</button>
            </div>
        </div>
    );
}

export default GetYourTeams;
