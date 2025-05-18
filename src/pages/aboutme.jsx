import { useEffect } from 'react'

function AboutMe() {
    const previousPath = localStorage.getItem('previousPath');

    useEffect(() => {
        document.title = 'Liam Broadway - About Me';
    }, []);

    return (
        <>
            <div>
                <a className="anchor-button" onClick={() => { window.location.href = previousPath }}>
                    <span className="material-symbols-rounded">arrow_back</span> Go Back</a>
            </div>
            <div className="row padding-bottom">
                <div className="background card aboutme">
                    <span className="title">My Story</span>
                    <div className="row">
                        <div className="card">
                            <p>As I'm sure you already know, my name is Liam. I'm a soon-to-be graduate in <a className="link" href="https://www.ulster.ac.uk/courses/202526/interactive-computing-36037" target="_blank">Interactive Computing (BSc)</a> with over 13+ years of graphic designing history.</p>
                            <p>I've been designing logos, cards and very basic HTML/CSS websites since I was around 12, with my first static website being developed in 2014, when I was 13 years old.</p>
                            <div className="showcase">
                                <img src="/images/history/lbunleashed-firstwebsite.jpg" alt="First Website Developed" />
                                <span className="image-note">LBUnleashed, a hobbyist business I launched at 12, armed with a program called WYSIWYG Web Builder 9.</span>
                            </div>
                            <p>It may have been simple, but it sparked a deep curiosity that never left.</p>
                            <p>Ever since then, I've been improving and refining my design skills — experimenting with colour theory, Photoshop, and Illustrator during my school years. Over time, that creative foundation led me to roles where I could fully express my ideas, often taking the lead in design projects.</p>
                            <p>In the words of one of my former employers:<br />
                                <span className="quote">“This is Ballymoney, Liam — not London!”</span></p>
                            <p>Even so, I’ve always brought a high standard and forward-thinking mindset to everything I design.</p>
                            <span className="title">The Origin Story: Where IT Took Over</span>
                            <p>That passion soon evolved into something bigger — and in 2015, during the first year of my GCSEs, I took my first serious step toward a career in IT.</p>
                            <div className="showcase">
                                <img src="/images/history/digitaldna.jpg" alt="A picture of me, and my friend Sam." />
                                <span className="image-note">Digital Futures, a school competition that would <a className="link" href="https://www.northernirelandworld.com/news/trip-of-a-lifetime-for-domincan-pair-2169520" target="_blank">shape my life.</a></span>
                            </div>
                            <p>Armed with nothing more than MIT App Inventor and Photoshop, my friend Sam and I were entered — alongside a group of other students in our year — into a school competition with an idea for an app called "Employapple."  Yes — we thought we were clever for that pun.</p>
                            <p>Inspired by my mum’s job at Maplin, where they relied on an outdated rota system, I pitched the idea to Sam: we’d create an Android app that was simpler and far more intuitive than what they were using.</p>
                            <p>The judges thought we were onto something.</p>
                            <p>Our project ended up winning us an all-expenses-paid trip to California, where we received private tours of some of the most iconic tech companies in Silicon Valley — including Facebook, Uber, and Google. We even had the chance to attend a private lecture on design thinking at Stanford University.</p>
                            <p>It was also during this trip that I struck up a conversation with Margaret Burgraff, then-VP at Intel — a moment that left a lasting impression and gave me a real boost in self-belief.</p>
                            <p>The experience was nothing short of incredible — a once-in-a-lifetime opportunity that sparked the flame for what would become a lifelong passion: pursuing a career in IT.</p>
                            <span className="title">So, What Now?</span>
                            <p>After that trip, something clicked. I realised I didn’t just enjoy using computers, playing games, and designing — I wanted to be part of the journey that shapes people’s experiences with technology.</p>
                            <p>Through the rest of secondary school and into sixth form, I focused on subjects like Media Studies and ICT, knowing these would lay the groundwork for what was to come. Between coursework and freelance graphic design work, I honed my creative skills and trained my eye for detail.</p>
                            <div className="showcase">
                                <img src="/images/history/lbunleashed-2018.jpg" alt="Freelancing during 2018." />
                                <span className="image-note">Constructing my digital identity.</span>
                            </div>
                            <p>Once A-levels came to a close, I knew I needed a degree that could marry creativity with code — something that would let me build as much as design. That’s when I discovered Interactive Computing at Ulster University.</p>
                            <p>But of course, the road wasn't always straight.</p>
                            <span className="title">COVID: Where Spirits Were Broken</span>
                            <p>After completing the first term of my first year, we were all met with an unexpected announcement about a virus — and as we now know, everything changed.</p>
                            <p>Despite the challenges of remote learning, isolation, and global uncertainty, my passion remained strong. I pushed through and was proud to be placed on the Dean’s List for 2020–2021, even receiving an award by post — a small but meaningful reminder that I was still on the right path.</p>
                            <p>When it came time to secure a placement, however, things became more difficult. Despite my best efforts, I couldn’t land a placement in industry. So instead, I opted to complete Ulster's <a className="link" href="https://www.ulster.ac.uk/employability/enterprise-placement-year" target="_blank">Enterprise Placement Year</a>.</p>
                            <div className="showcase maxh">
                                <img src="/images/history/epy.jpg" alt="Enterprise Placement Year." />
                                <span className="image-note">On call with the EPY students and lecturers in the back of a campervan.</span>
                            </div>
                            <p>During my Enterprise Placement Year, I set out to build something of my own.</p>
                            <p>I rebranded my childhood project, LBUnleashed, into Broadway Graphics — a web and graphic design agency built from the ground up. The idea was simple: offer clean, modern design services to small businesses, creatives, and anyone in need of a digital presence.</p>
                            <p>It was an ambitious leap. I crafted branding, offered services, and even began marketing myself professionally.</p>
                            <p>But despite the effort I put in — it didn’t go the way I hoped.</p>
                            <p>The business didn’t gain traction. I didn’t secure the clients I needed. And while the EPY staff were incredibly supportive throughout, I couldn't shake the feeling that I had failed. Not just the business, but myself.</p>
                            <p>My self-confidence took a huge hit, and eventually, I made the difficult decision to leave the EPY early.</p>
                            <span className="title">Picking Myself Back Up</span>
                            <p>So, I went back to normal jobs — I worked in Tesco. During those shifts, I started reflecting on what I really loved in life:</p>
                            <p>Design.</p>
                            <p>I enrolled in a year of Open University to study Design, hoping it would scratch that creative itch. But something felt off — it just didn’t work for me. So I stepped away again and tried to return to something familiar: graphic design for a signwriting company — a job I had genuinely enjoyed before my first time at Ulster University.</p>
                            <p>That led me to start job hunting, and I landed a position at <a className="link" href="https://midantrimsigns.com/" target="_blank">Mid Antrim Signs</a>, where I currently work.</p>
                            <div className="showcase maxh">
                                <img src="/images/history/mas.jpg" alt="Mid Antrim Signs." />
                                <span className="image-note">A sunset view from Mid Antrim Signs.</span>
                            </div>
                            <p>While there, I found myself needing to manage some of the company’s signage contracts more effectively. So, I did what came naturally:</p>
                            <p>I built a Microsoft Access database to keep things organised — to make sense of the chaos. Because when I need to get something done, I turn to the one tool that’s always made sense to me: a computer.</p>
                            <p>And with that small project, something changed.</p>
                            <p>The dead flame of computing sparked back to life — a little ember reignited an old, forgotten part of my brain.</p>
                            <p>That project reminded me who I was and propelled me in the direction I’d lost sight of.</p>
                            <p>So, I took a chance.</p>
                            <p>I emailed Ulster University to ask if there was any way I could return and finish what I started. Thanks to the strength of my previous grades and attendance, they welcomed me back — and I’ve been finishing my final year ever since.</p>
                            <p>None of that would’ve been possible without the incredible understanding and support of my boss, Mark, at Mid Antrim Signs. I’m deeply grateful for his encouragement — it gave me the space and confidence I needed to take that leap back into higher education.</p>
                            <span className="title">The Future: What Lies Ahead</span>
                            <div className="showcase maxh">
                                <img src="/images/history/bus-stop.jpg" alt="Jordanstown Bus Stop." />
                                <span className="image-note">A sunny day, at the University bus stop.</span>
                            </div>
                            <p>Now, I’m on the brink of graduation — and I’m ready to take on the world.</p>
                            <p>I’m excited to dive into the world of IT, where I can combine my love for design with my reignited passion for coding.</p>
                            <p>If you’re looking for someone who bridges the gap between creativity and code — someone with real-world grit, relentless curiosity, and a design-led mindset — I’m ready. Let’s <a className="link" href="/">connect</a>.</p>
                            <p>Thanks for reading my story. I can’t wait to see what the future holds.</p>
                            <p className="signature">Liam Broadway</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutMe