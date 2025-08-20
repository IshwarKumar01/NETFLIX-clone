import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";


const Net = () => {
    const [extended, setextended] = useState(false)
    const [extend, setextend] = useState(false)
    const [exten, setexten] = useState(false)
    const [exte, setexte] = useState(false)
    const [ext, setext] = useState(false)
    const [ex, setex] = useState(false)
    return (
        <>
            <div className="image">
                <div className="nav">
                    <img src="./src/assets/images/logo.svg" alt="" />
                    <div className="buttons">
                        <button className='btn-white cursor-pointer'>English</button>
                        <button className='btn-red cursor-pointer'>Sign In</button>
                    </div>
                </div>
                <div className="box"></div>
                <div className="text">
                    <div className='first'>Unlimited movies,<br />TV shows and more</div>
                    <div className='second'>Starts at ₹149. Cancel at any time.</div>
                    <div className='third'>Ready to watch? Enter your email to create or restart your membership.</div>
                    <div className="text-buttons">
                        <input type="text" placeholder='Email address' />
                        <button className='btn-red cursor-pointer'>Get Started &gt;</button>
                    </div>
                </div>
            </div>
            <div className="line"></div>
            <div className="main">
                <div className="main-first">
                    <div>Enjoy On Your Tv</div>
                    <div>Watch on televisons, playstation, X-boxs, and several other devices of your liking <br /> and this is a great experience.</div>
                </div>
                <div className="main-second">
                    <video className='m-4' muted autoPlay loop src="src/assets/videos/video1.m4v"></video>
                </div>
            </div>
            <div className="line"></div>
            <div className="main">
                <div className="main-second">
                    <video className='w-90 four' muted autoPlay loop src="src/assets/videos/video2.mp4"></video>
                </div>
                <div className="main-first">
                    <div>Enjoy On Your Tablet</div>
                    <div>You can watch as much as you want, whenever you want.</div>
                </div>
            </div>
            <div className="line"></div>
            <div className="main">
                <div className="main-first">
                    <div>Enjoy On Your Computer</div>
                    <div>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime.
                    </div>
                </div>
                <div className="main-second">
                    <video className='h-52 four' muted autoPlay loop src="src/assets/videos/video3.mp4"></video>
                </div>
            </div>
            <div className="hero">
                <div className="frequent font-medium text-xl">Frequently Asked Questions</div>
                <div className="javascript">
                    <div className="upper">What is Netflix?<FaPlus onClick={() => { setextended(prev => !prev) }} className='cursor-pointer' /></div>
                    {extended ?
                        <div className="lower">
                            <div>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime., documentaries and more – on thousands of internet-connected devices.</div>
                            <div>
                                You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
                            </div>
                        </div> : null}
                </div>
                <div className="javascript">
                    <div className="upper"> How much does Netflix cost?<FaPlus onClick={() => { setextend(prev => !prev) }} className='cursor-pointer' /></div>
                    {extend ?
                        <div className="lower">
                            <div>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.
                            </div>
                        </div> : null}
                </div>
                <div className="javascript">
                    <div className="upper">Where can I watch?<FaPlus onClick={() => { setexten(prev => !prev) }} className='cursor-pointer' /></div>
                    {exten ?
                        <div className="lower">
                            <div>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
                            </div>
                            <div>You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
                            </div>
                        </div> : null}
                </div>
                <div className="javascript">
                    <div className="upper">  How do I cancel?<FaPlus onClick={() => { setexte(prev => !prev) }} className='cursor-pointer' /></div>
                    {exte ?
                        <div className="lower">
                            <div>Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
                            </div>
                        </div> : null}
                </div>
                <div className="javascript">
                    <div className="upper"> What can I watch on Netflix?<FaPlus onClick={() => { setext(prev => !prev) }} className='cursor-pointer' /></div>
                    {ext ?
                        <div className="lower">
                            <div>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
                            </div>
                        </div> : null}
                </div>
                <div className="javascript"> qs
                    <div className="upper"> Is Netflix good for kids?<FaPlus onClick={() => { setex(prev => !prev) }} className='cursor-pointer' /></div>
                    {ex ?
                        <div className="lower">
                            <div>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.
                            </div>
                            <div>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
                            </div>
                        </div> : null}
                </div>
            </div>

            <div className="search">
                <div>Ready to watch? Enter your email to create or restart your membership.</div>
                <div className="text-buttons center">
                    <input type="text" placeholder='Email address' />
                    <button className='btn-red cursor-pointer'>Get Started &gt;</button>
                </div>
            </div>

            <div className="call">Questions?<a href="">Call 000-800-919-1743</a></div>

            <div className="grid">
                <a href="">FAQ</a>
                <a href="">Help Centre</a>
                <a href="">Account</a>
                <a href="">Media center</a>
                <a href="">Invester Relations</a>
                <a href="">Privacy</a>
                <a href="">Speed Test</a>
                <a href="">Ways to Watch</a>
                <a href="">Corporate Information</a>
                <a href="">Legal Notices</a>
                <a href="">Only on Netflix</a>
                <a href="">Contact us</a>
                <a href="">Terms of use</a>
                <a href="">Media center</a>
                <a href="">Cookie Preferences</a>
            </div>

            <div className="foot">
                <button className='btn-white cursor-pointer'>English</button>
                <div>Netflix India</div>
            </div>
        </>
    )
}

export default Net
