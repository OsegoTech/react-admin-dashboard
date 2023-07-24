import "./topbox.scss"
import { topDealUsers } from "../../data"

export default function Topbox() {
    return (
        <div className="topbox">
            <h1>Top Deals</h1>
            <div className="list">
                {topDealUsers.map((u) => (
                    <div className="listItem" key={u.id}>
                        <div className="user">
                            <img src={u.img} alt="" />
                            <div className="userTexts">
                                <span className="username">{u.username}</span>
                                <span className="email">{u.email}</span>
                            </div>
                        </div>
                        <span className="amount">
                            ${u.amount}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}