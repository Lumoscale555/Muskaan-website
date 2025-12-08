import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";

type Section = { title: string; body: string };

const DATA: Record<string, any> = {

  // =================================================================================
  // ARTICLE 1: NCLT KOCHI
  // =================================================================================
  "ibc-update": {
    title: "NCLT Kochi Approves Resolution Plan Below Liquidation Value",
    subtitle: "A noteworthy IBC development where Financial Creditors accepted a resolution amount lower than the liquidation value of the Corporate Debtor—highlighting the primacy of resolution over liquidation.",
    author: "Team Maglaw",
    date: "20 December 2024",
    readTime: "12 min read",
    category: "Insolvency and Bankruptcy Law",
    sections: [
      {
        title: "Introduction",
        body: `
          <p class="mb-5 leading-relaxed text-gray-700">
            In a significant development under the Insolvency and Bankruptcy Code (IBC), the NCLT Kochi Bench has approved a resolution plan with a payout lower than the liquidation value of the Corporate Debtor — Samson and Sons Builders and Developers Private Limited. This case reaffirms the IBC principle that resolution is preferable to liquidation, especially in real estate insolvencies involving homebuyers.
          </p>
        `
      },
      {
        title: "Case Snapshot",
        body: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 bg-slate-50 p-6 rounded-xl border border-slate-200">
            <div><b class="text-primary block text-sm uppercase tracking-wide text-slate-500">Corporate Debtor</b><span class="font-medium">Samson and Sons Builders and Developers Pvt. Ltd.</span></div>
            <div><b class="text-primary block text-sm uppercase tracking-wide text-slate-500">Industry</b><span class="font-medium">Real Estate</span></div>
            <div><b class="text-primary block text-sm uppercase tracking-wide text-slate-500">CIRP Admission Date</b><span class="font-medium">03 November 2022</span></div>
            <div><b class="text-primary block text-sm uppercase tracking-wide text-slate-500">Resolution Plan Approval Date</b><span class="font-medium">20 December 2024</span></div>
            <div><b class="text-primary block text-sm uppercase tracking-wide text-slate-500">Bench</b><span class="font-medium">NCLT Kochi</span></div>
            <div><b class="text-primary block text-sm uppercase tracking-wide text-slate-500">Total Resolution Timeline</b><span class="font-medium">1,143 days</span></div>
            <div class="md:col-span-2 pt-4 border-t border-slate-200">
              <b class="text-primary block text-sm uppercase tracking-wide text-slate-500 mb-1">Context</b>
              <p class="text-gray-700">Financial Creditors accepted a resolution amount significantly below the liquidation value.</p>
            </div>
          </div>
        `
      },
      {
        title: "Key Financial Details",
        body: `
          <div class="mb-8">
            <h4 class="font-bold text-gray-900 text-lg mb-4 border-b pb-2">Overall Realisation Metrics</h4>
            <ul class="space-y-4 text-gray-700">
              <li class="bg-white p-3 rounded shadow-sm border border-gray-100">
                <span class="font-bold block text-gray-900">Claim:</span> 
                INR 192.58 Cr (Indian Rupees One Hundred Ninety-Two Crore and Fifty-Eight Lakh)
              </li>
              <li class="bg-white p-3 rounded shadow-sm border border-gray-100">
                <span class="font-bold block text-gray-900">Resolution Amount:</span> 
                INR 0.29 Cr (Indian Rupees Twenty-Nine Lakh)
              </li>
              <li class="bg-white p-3 rounded shadow-sm border border-gray-100">
                <span class="font-bold block text-gray-900">% of Realisation:</span> 
                0.16% (Zero Point One Six Percent)
              </li>
              <li class="bg-white p-3 rounded shadow-sm border border-gray-100">
                <span class="font-bold block text-gray-900">Asset Size:</span> 
                INR 642.47 Lakhs (Indian Rupees Six Hundred Forty-Two Lakh and Forty-Seven Thousand)
              </li>
            </ul>
          </div>

          <h4 class="font-bold text-gray-900 text-lg mb-4 border-b pb-2">Creditor-Wise Proposal Under the Resolution Plan</h4>
          
          <div class="space-y-6">
            <div class="pl-4 border-l-4 border-blue-500 bg-blue-50/50 p-4 rounded-r-lg">
              <h5 class="font-bold text-blue-900 text-md">1. Secured Financial Creditors (SFC)</h5>
              <div class="mt-2 space-y-2 text-sm text-gray-800">
                <p><strong>Claim:</strong> INR 43,78,69,899<br/>(Rupees Forty-Three Crore Seventy-Eight Lakh Sixty-Nine Thousand Eight Hundred Ninety-Nine)</p>
                <p><strong>Proposed:</strong> INR 25,00,000<br/>(Rupees Twenty-Five Lakh)</p>
                <p><strong>Realisation:</strong> 0.53%<br/>(Zero Point Five Three Percent)</p>
              </div>
            </div>

            <div class="pl-4 border-l-4 border-indigo-500 bg-indigo-50/50 p-4 rounded-r-lg">
              <h5 class="font-bold text-indigo-900 text-md">2. Unsecured FC – Deposit Holders</h5>
               <div class="mt-2 space-y-2 text-sm text-gray-800">
                <p><strong>Claim:</strong> INR 4,95,60,625<br/>(Rupees Four Crore Ninety-Five Lakh Sixty Thousand Six Hundred Twenty-Five)</p>
                <p><strong>Proposed:</strong> INR 1,27,100<br/>(Rupees One Lakh Twenty-Seven Thousand One Hundred)</p>
                <p><strong>Realisation:</strong> 0.26%<br/>(Zero Point Two Six Percent)</p>
              </div>
            </div>

            <div class="pl-4 border-l-4 border-green-500 bg-green-50/50 p-4 rounded-r-lg">
              <h5 class="font-bold text-green-900 text-md">3. Unsecured FC – Homebuyers</h5>
               <div class="mt-2 space-y-2 text-sm text-gray-800">
                <p><strong>Claim:</strong> INR 1,13,50,84,420<br/>(Rupees One Hundred Thirteen Crore Fifty Lakh Eighty-Four Thousand Four Hundred Twenty)</p>
                <p><strong>Proposed:</strong> Refer Key Point No. 1</p>
                <p><strong>Realisation:</strong> Not Applicable</p>
              </div>
            </div>

            <div class="pl-4 border-l-4 border-yellow-500 bg-yellow-50/50 p-4 rounded-r-lg">
              <h5 class="font-bold text-yellow-900 text-md">4. Operational Creditors – Statutory Dues</h5>
               <div class="mt-2 space-y-2 text-sm text-gray-800">
                <p><strong>Claim:</strong> INR 1,45,77,264<br/>(Rupees One Crore Forty-Five Lakh Seventy-Seven Thousand Two Hundred Sixty-Four)</p>
                <p><strong>Proposed:</strong> INR 3,36,400<br/>(Rupees Three Lakh Thirty-Six Thousand Four Hundred)</p>
                <p><strong>Realisation:</strong> 0.25%<br/>(Zero Point Two Five Percent)</p>
              </div>
            </div>

            <div class="pl-4 border-l-4 border-orange-500 bg-orange-50/50 p-4 rounded-r-lg">
              <h5 class="font-bold text-orange-900 text-md">5. Operational Creditors – Others</h5>
               <div class="mt-2 space-y-2 text-sm text-gray-800">
                <p><strong>Claim:</strong> INR 4,58,64,892<br/>(Rupees Four Crore Fifty-Eight Lakh Sixty-Four Thousand Eight Hundred Ninety-Two)</p>
                <p><strong>Proposed:</strong> INR 35,900<br/>(Rupees Thirty-Five Thousand Nine Hundred)</p>
                <p><strong>Realisation:</strong> 0.08%<br/>(Zero Point Zero Eight Percent)</p>
              </div>
            </div>

            <div class="pl-4 border-l-4 border-gray-500 bg-gray-50/50 p-4 rounded-r-lg">
              <h5 class="font-bold text-gray-900 text-md">6. Other Creditors</h5>
               <div class="mt-2 space-y-2 text-sm text-gray-800">
                <p><strong>Claim:</strong> INR 8,68,76,287<br/>(Rupees Eight Crore Sixty-Eight Lakh Seventy-Six Thousand Two Hundred Eighty-Seven)</p>
                <p><strong>Proposed:</strong> Nil</p>
                <p><strong>Realisation:</strong> Nil</p>
              </div>
            </div>
          </div>
        `
      },
      {
        title: "Key Observations From the NCLT Order",
        body: `
          <div class="space-y-6 text-gray-800">
            <div>
              <h5 class="font-bold text-primary">1. Homebuyer Unit Registration Proposed</h5>
              <p class="mt-1 text-gray-700">The resolution plan includes registration and allocation of units to homebuyers, reinforcing their priority in real estate insolvencies.</p>
            </div>

            <div>
              <h5 class="font-bold text-primary">2. CoC Invited Project-Wise Resolution Plans</h5>
              <ul class="list-disc pl-5 mt-1 text-gray-700 space-y-1">
                <li>The Committee of Creditors opted for project-wise resolution under Regulation 37(m) of the CIRP Regulations, 2016.</li>
                <li>Out of three projects, “Sharon Hills-1” was resolved, while other projects remain under insolvency.</li>
              </ul>
            </div>

            <div>
              <h5 class="font-bold text-primary">3. Resolution Amount Below Liquidation Value</h5>
              <p class="mt-1 text-gray-700">Although the plan did not provide full liquidation value to dissenting Financial Creditors (as per Section 30(2)(b)(ii)), the NCLT approved it because:</p>
              <ul class="list-disc pl-5 mt-1 text-gray-700 space-y-1">
                <li>It was deemed the only feasible and viable option.</li>
                <li>Liquidation would adversely affect homebuyers, whose rights are restricted to the project under resolution.</li>
              </ul>
            </div>

            <div>
              <h5 class="font-bold text-primary">4. Reliance on Supreme Court Precedent</h5>
              <p class="mt-1 text-gray-700">NCLT relied on Bikram Chatterjee & Ors. v. UOI & Ors., where the Supreme Court held:</p>
              <blockquote class="mt-2 p-3 bg-gray-100 border-l-4 border-gray-400 italic">
                A Corporate Debtor cannot be pushed into liquidation without transferring the project’s assets to homebuyers.
              </blockquote>
            </div>

            <div>
              <h5 class="font-bold text-primary">5. Additional Offer for SFCs</h5>
              <ul class="list-disc pl-5 mt-1 text-gray-700">
                <li>₹25 lakh if SFCs assent</li>
                <li>₹30 lakh if SFCs dissent</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        title: "Why This Case Matters",
        body: `
          <div class="bg-primary/5 rounded-xl p-6 border border-primary/20">
            <ul class="list-disc pl-5 space-y-2 text-gray-700">
              <li>Sets a notable precedent on approving resolution plans below liquidation value.</li>
              <li>Reinforces the primacy of resolution over liquidation.</li>
              <li>Highlights the preferential protection of homebuyers in real estate CIRPs.</li>
              <li>Demonstrates effective use of project-wise resolution strategies.</li>
              <li>Offers clarity on the CoC’s commercial wisdom in cases of low recovery.</li>
            </ul>
          </div>
        `
      },
      {
        title: "Conclusion",
        body: `
          <p class="text-lg leading-relaxed text-gray-700 mb-4">
            The approval of the resolution plan for Samson and Sons Builders marks a significant moment in IBC jurisprudence. The NCLT Kochi Bench’s decision underscores a consistent judicial approach—prioritising completion of projects and homebuyer relief over liquidation and asset erosion. This case will likely guide future real estate insolvency resolutions, especially where project viability varies across a single corporate debtor.
          </p>
        `
      }
    ]
  },

  // =================================================================================
  // ARTICLE 2: FOUNDER GLOSSARY
  // =================================================================================
  "founder-glossary": {
    title: "Term of the Day: Essential Startup Glossary Every Founder Must Know",
    author: "MAG.LAW Advisors and Consultants LLP",
    date: "2024",
    readTime: "15 min read",
    category: "Startup Ecosystem",
    sections: [
      {
        title: "Overview",
        body: `
          <p class="text-lg leading-relaxed text-gray-700 mb-6">
            Understanding startup terminology is crucial for every founder, especially when navigating fundraising, equity structures, investor expectations, and strategic decision-making. This curated “Term of the Day” series by MAG.LAW Advisors and Consultants LLP simplifies the most important concepts that drive the startup ecosystem.
          </p>
          <p class="text-gray-700 leading-relaxed">
            From cap tables to venture capital, burn rate to liquidation waterfalls, this glossary breaks down complex terms into clear, actionable insights that help founders make informed decisions with confidence.
          </p>
        `
      },
      {
        title: "Startup Terms You Should Know (Founders’ Glossary 2024)",
        body: `
          <div class="space-y-10">
            <div class="p-5 bg-white shadow-sm border border-gray-100 rounded-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-2">1. BURN RATE</h3>
              <p class="text-gray-700 mb-3">The amount of cash a startup spends each month to cover operations. It tells you how fast you're using up your funding — and how long your runway lasts.</p>
            </div>

            <div class="p-5 bg-white shadow-sm border border-gray-100 rounded-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-2">2. BOOTSTRAPPING</h3>
              <p class="text-gray-700 mb-3">Bootstrapping refers to building a startup without external funding. It involves using personal savings, early revenue, or the company’s own cash flow to finance operations</p>
              <p class="text-sm font-semibold text-indigo-600">~ your own money</p>
            </div>

            <div class="p-5 bg-white shadow-sm border border-gray-100 rounded-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-2">3. BRIDGE FINANCING</h3>
              <p class="text-gray-700 mb-3">Bridge Financing is a short-term loan used to cover immediate cash flow needs or fill funding gaps until a more permanent source of financing is secured. It's commonly used during transitions, such as startup scaling, acquisitions, or real estate deals.</p>
              <p class="text-sm font-semibold text-indigo-600">~lifeline</p>
            </div>

            <div class="p-5 bg-white shadow-sm border border-gray-100 rounded-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-2">4. CAMEL STARTUPS</h3>
              <p class="text-gray-700 mb-3">Camel Startups focus on resilience, not runaway growth. They're cash-efficient, built to survive tough markets, and prioritize profit over prestige.</p>
              <p class="text-gray-700">In uncertain times, camels go farther than unicorns.</p>
            </div>

            <div class="p-5 bg-white shadow-sm border border-gray-100 rounded-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-2">5. CAP (CAP TABLE)</h3>
              <p class="text-gray-700 mb-3">It’s a document that outlines who owns how much— from founders to investors, along with the types of securities held (common stock, preferred stock, options, warrants).</p>
              <p class="text-sm font-semibold text-indigo-600 mb-1">~story of your startup's ownership.</p>
              <p class="text-gray-900 font-medium">Blueprint of your Equity Structure</p>
            </div>

             <div class="p-5 bg-white shadow-sm border border-gray-100 rounded-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-2">6. CLIFF PERIOD</h3>
              <p class="text-gray-700 mb-3">A Cliff is the minimum period a team member must work before their stock options start to vest.</p>
              <p class="text-gray-700 mb-3">Common setup: 1-year cliff in a 4-year vesting plan</p>
              <p class="text-sm font-semibold text-indigo-600">~can’t stay longer = can’t get ESOP benefits</p>
            </div>

            <div class="p-5 bg-white shadow-sm border border-gray-100 rounded-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-2">7. CO-FOFOUNDER (your PDF spells "whp" and “CO-FOUNDER” – kept exactly as is)</h3>
              <p class="text-gray-700 mb-3">A Co-Founder is the person whp joins the founder at zero - before funding, before traction, before certainty; to build the startup from the ground up.</p>
              <p class="text-gray-700 mb-3">They share the vision, the risk, and the responsibility— contributing ideas, effort, resources, or expertise.</p>
              <p class="text-sm font-semibold text-indigo-600">~ your startup ally</p>
            </div>

            <div class="p-5 bg-white shadow-sm border border-gray-100 rounded-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-2">8. CORPORATE ACCELERATOR (your PDF spells as “ACCELATAROR” – kept exactly as is)</h3>
              <p class="text-gray-700 mb-3">When giants and startups team up.</p>
              <p class="text-gray-700">A Corporate Accelerator gives startups access to resources, customers, and mentorship—all backed by an established brand.</p>
            </div>

            <div class="p-5 bg-white shadow-sm border border-gray-100 rounded-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-2">9. DATA ROOM</h3>
              <p class="text-gray-700 mb-3">A Data Room is a secure digital space where startups store and share key company documents like incorporation papers, cap tables, financials, contracts, and IP filings.</p>
              <p class="text-gray-700">scrutinized strictly by the investors</p>
            </div>

            <div class="p-5 bg-white shadow-sm border border-gray-100 rounded-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-2">10. DEEP TECH</h3>
              <p class="text-gray-700 mb-3">Deep Tech is where science meets scale. Think AI, quantum computing, biotech—startups solving real problems with cutting-edge research.</p>
              <p class="text-gray-700">These companies solve foundational global problems (climate, healthcare, computation), but need long timelines, talent, and patient capital.</p>
            </div>

            <div class="p-5 bg-white shadow-sm border border-gray-100 rounded-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-2">11. DOWN ROUND</h3>
              <p class="text-gray-700 mb-3">A Down Round happens when a startup raises money at a lower valuation than its previous funding round.</p>
              <p class="text-gray-700">It signals market hesitation, business challenges, or overvaluation in the past.</p>
            </div>

            <div class="p-5 bg-white shadow-sm border border-gray-100 rounded-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-2">12. DUAL-CLASS SHARES</h3>
              <p class="text-gray-700 mb-3">Dual-Class Shares give different voting powers to different shareholders.</p>
              <p class="text-gray-700">Often used by founders to retain control post-IPO or during multiple fundraises.</p>
            </div>

            <div class="p-5 bg-white shadow-sm border border-gray-100 rounded-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-2">13. ENTREPRENEUR IN RESIDENCE</h3>
              <p class="text-gray-700 mb-3">An EIR is a seasoned entrepreneur who helps incubate ideas inside a VC fund, corporate, or university—then spins them out into startups.</p>
              <p class="text-gray-700">Getting paid to build, test, and launch with backing.</p>
            </div>

            <div class="p-5 bg-white shadow-sm border border-gray-100 rounded-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-2">14. ESOP BUYBACK</h3>
              <p class="text-gray-700 mb-3">An ESOP Buyback is when the company offers to buy back vested employee stock options—often during a funding round or exit.</p>
            </div>

            <div class="p-5 bg-white shadow-sm border border-gray-100 rounded-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-2">15. FLIP STRUCTURE</h3>
              <p class="text-gray-700 mb-3">A Flip Structure is a legal restructuring where an Indian startup sets up a foreign holding company (usually in Delaware or Singapore) for better fundraising access.</p>
              <p class="text-gray-700">It’s complex but also strategic for global ambitions.</p>
            </div>

            <div class="p-5 bg-white shadow-sm border border-gray-100 rounded-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-2">16. INNOVATION SYSTEM</h3>
              <p class="text-gray-700 mb-3">An Innovation System is the ecosystem of universities, incubators, VCs, policies, and talent that fuel startup success.</p>
              <p class="text-gray-700">From Silicon Valley to Bengaluru - strong systems birth strong startups.</p>
            </div>

            <div class="p-5 bg-white shadow-sm border border-gray-100 rounded-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-2">17. LIQUIDATION WATERFALL</h3>
              <p class="text-gray-700 mb-3">A Liquidation Waterfall defines who gets paid first and how much in an exit — investors, founders, employees.</p>
              <p class="text-gray-700">Understanding the waterfall = understanding your real exit outcome.</p>
            </div>

            <div class="p-5 bg-white shadow-sm border border-gray-100 rounded-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-2">18. MFN CLAUSE (Most Favoured Nation)</h3>
              <p class="text-gray-700 mb-3">A Most Favoured Nation Clause allows early investors (often in SAFEs) to receive better terms if offered to later investors.</p>
            </div>

            <div class="p-5 bg-white shadow-sm border border-gray-100 rounded-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-2">19. MINIMUM VIABLE PRODUCT (MVP)</h3>
              <p class="text-gray-700 mb-3">A Minimum Viable Product (MVP) is the simplest, functional version of a product that’s built to test a new idea in the real world.</p>
              <p class="text-gray-700">It has just enough features to attract early adopters, gather feedback, and validate the product concept — without wasting time or resources on building the full version.</p>
            </div>

            <div class="p-5 bg-white shadow-sm border border-gray-100 rounded-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-2">20. OPEN INNOVATION</h3>
              <p class="text-gray-700 mb-3">Open Innovation is when companies collaborate outside their walls—with startups, researchers, even competitors—to accelerate growth.</p>
              <p class="text-gray-700">Sharing ideas, IP, and insights = a smarter, faster world.</p>
            </div>

            <div class="p-5 bg-white shadow-sm border border-gray-100 rounded-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-2">21. PAY-TO-PLAY</h3>
              <p class="text-gray-700 mb-3">A Pay-to-Play clause requires existing investors to participate in future rounds to retain key rights (like anti-dilution).</p>
            </div>

            <div class="p-5 bg-white shadow-sm border border-gray-100 rounded-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-2">22. PHANTOM EQUITY</h3>
              <p class="text-gray-700 mb-3">Phantom Equity gives employees financial upside without actual shares—typically in the form of cash bonuses tied to company valuation or profits.</p>
              <p class="text-gray-700">No dilution, but lots of motivation.</p>
            </div>

            <div class="p-5 bg-white shadow-sm border border-gray-100 rounded-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-2">23. PRODUCT-MARKET FIT</h3>
              <p class="text-gray-700 mb-3">Is the point where your product perfectly meets real market demand. It’s not just about building something — it’s about building something people actually need and want to use.</p>
            </div>

            <div class="p-5 bg-white shadow-sm border border-gray-100 rounded-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-2">24. PRO RATA RIGHTS</h3>
              <p class="text-gray-700 mb-3">Pro Rata Rights give an existing investor the option (not obligation) to maintain their ownership % in future funding rounds.</p>
              <p class="text-gray-700">It ensures they aren’t diluted as the company raises more capital.</p>
            </div>

            <div class="p-5 bg-white shadow-sm border border-gray-100 rounded-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-2">25. RUNWAY</h3>
              <p class="text-gray-700 mb-3">Runway refers to the amount of time a startup can continue operating before it runs out of cash - assuming no new income or funding.</p>
              <p class="text-sm font-semibold text-indigo-600 mb-1">~ cash lifeline</p>
              <p class="text-gray-900 font-mono text-sm bg-gray-50 inline-block px-2 py-1 rounded">Runway = Current Cash ÷ Monthly Burn Rate</p>
            </div>

            <div class="p-5 bg-white shadow-sm border border-gray-100 rounded-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-2">26. SOFT LANDING</h3>
              <p class="text-gray-700 mb-3">A Soft Landing program helps startups expand internationally with local market support, mentoring, and resources—without the crash.</p>
              <p class="text-gray-700">From visas to coworking to market entry — it's a smoother ride.</p>
            </div>

            <div class="p-5 bg-white shadow-sm border border-gray-100 rounded-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-2">27. VENTURE BUILDERS</h3>
              <p class="text-gray-700 mb-3">Venture Builders create startups in-house from scratch. They’re like startup factories with capital, co-founders, and an idea lab all under one roof.</p>
              <p class="text-gray-700">Ideal for repeat founders and risk-managed innovation.</p>
            </div>

            <div class="p-5 bg-white shadow-sm border border-gray-100 rounded-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-2">28. VENTURE CAPITAL</h3>
              <p class="text-gray-700 mb-3">Venture Capital (VC) is a form of private equity financing where investors provide funding to early- stage, high-potential startups in exchange for equity ownership. Beyond capital, venture capitalists often offer strategic support, mentorship, and access to a powerful network to help companies scale and succeed.</p>
            </div>

            <div class="p-5 bg-white shadow-sm border border-gray-100 rounded-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-2">29. VENTURE-CLIENT MODEL</h3>
              <p class="text-gray-700 mb-3">In the Venture-Client Model, big companies buy from startups without taking equity—offering validation, scale, and feedback.</p>
              <p class="text-gray-700 mb-1">Proof > pitch decks. Real revenue, real fast.</p>
            </div>
          </div>
        `
      }
    ]
  },

  // =================================================================================
  // ARTICLE 3: ROC PENALTY
  // =================================================================================
  "roc-penalty": {
    title: "ROC Adjudication Order: Penalty Imposed for Non-Reporting of Board Meetings in MGT-7A",
    author: "Team Maglaw",
    date: "2024",
    readTime: "8 min read",
    category: "Company Law",
    sections: [
      {
        title: "Keywords",
        body: `
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="px-3 py-1 bg-gray-100 rounded-md text-xs font-medium text-gray-700 border border-gray-200">ROC Adjudication Order</span>
            <span class="px-3 py-1 bg-gray-100 rounded-md text-xs font-medium text-gray-700 border border-gray-200">MGT-7A non-compliance</span>
            <span class="px-3 py-1 bg-gray-100 rounded-md text-xs font-medium text-gray-700 border border-gray-200">Section 134 Companies Act</span>
            <span class="px-3 py-1 bg-gray-100 rounded-md text-xs font-medium text-gray-700 border border-gray-200">ROC Penalty</span>
            <span class="px-3 py-1 bg-gray-100 rounded-md text-xs font-medium text-gray-700 border border-gray-200">Board Meeting disclosure</span>
            <span class="px-3 py-1 bg-gray-100 rounded-md text-xs font-medium text-gray-700 border border-gray-200">MCA compliance updates</span>
          </div>
        `
      },
      {
        title: "Overview",
        body: `
          <p class="leading-relaxed text-gray-700 mb-4">
            The Registrar of Companies (ROC), Chandigarh has issued an adjudication order imposing a penalty of over ₹2 lakh on a company and its directors for failing to report the number of Board Meetings held in Form MGT-7A for FY 2021–22. The non-reporting resulted in a violation of Section 134 of the Companies Act, 2013, which mandates accurate disclosures in financial statements and Board reports.
          </p>
        `
      },
      {
        title: "Background of the Case",
        body: `
          <div class="bg-slate-50 border border-slate-200 rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div><strong>Company Incorporation Date:</strong><br/>04 June 2020</div>
            <div><strong>Applicable Law:</strong><br/>Section 134 of the Companies Act, 2013</div>
            <div><strong>Form Involved:</strong><br/>MGT-7A (Annual Return for Small Companies & OPCs)</div>
            <div><strong>Default Period:</strong><br/>Financial Year 2021–22</div>
          </div>
          <p class="mt-4 text-gray-700">
            During scrutiny of filings, the ROC observed that the company failed to disclose the number of Board Meetings conducted during the financial year. This omission created discrepancies in statutory reporting and constituted a compliance breach.
          </p>
        `
      },
      {
        title: "Nature of Non-Compliance",
        body: `
          <p class="mb-4 text-gray-700">
            The company submitted Form MGT-7A with incomplete Board Meeting information, which is a mandatory disclosure under the Companies Act. Accurate Board Meeting reporting is critical because it:
          </p>
          <ul class="list-disc pl-6 space-y-2 text-gray-700">
            <li>Ensures transparency in corporate governance</li>
            <li>Reflects proper functioning of the Board</li>
            <li>Forms part of statutory annual return records maintained by the MCA</li>
          </ul>
          <p class="mt-4 text-gray-700">
            Failure to report such details attracts penal action under Section 134.
          </p>
        `
      },
      {
        title: "Penalties Imposed by ROC Chandigarh",
        body: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div class="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
              <h4 class="text-red-800 font-bold mb-2">1. Penalty on the Company</h4>
              <p class="text-3xl font-bold text-red-600">₹1,50,000</p>
              <p class="text-sm text-red-700 mt-2">(Rupees One Lakh Fifty Thousand)</p>
            </div>
            <div class="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
              <h4 class="text-red-800 font-bold mb-2">2. Penalty on Directors</h4>
              <p class="text-3xl font-bold text-red-600">₹25,000</p>
              <p class="text-sm text-red-700 mt-2">each, payable within 90 days</p>
            </div>
          </div>
          <p class="mt-4 text-center text-gray-700">The ROC held both the company and its directors liable for the lapse and directed payment within the prescribed statutory timeline.</p>
        `
      },
      {
        title: "Key Takeaways for Companies",
        body: `
          <div class="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
            <ul class="space-y-3 text-gray-800">
              <li>Annual Return (MGT-7 / MGT-7A) must accurately reflect the number of Board Meetings conducted.</li>
              <li>Non-disclosure can result in heavy monetary penalties under Section 134.</li>
              <li>Even small companies and OPCs filing MGT-7A are fully accountable for proper reporting.</li>
              <li>Directors share liability for non-compliance.</li>
            </ul>
          </div>
        `
      },
      {
        title: "Conclusion",
        body: `
          <p class="text-gray-700 leading-relaxed">
            This adjudication order underscores the importance of accurate statutory disclosures, especially in annual filings like MGT-7A. Companies must ensure proper record-keeping of Board Meetings and verify all details before submitting statutory forms to avoid penalties and regulatory action
          </p>
        `
      }
    ]
  },

  // =================================================================================
  // ARTICLE 4: FEMA AMENDMENTS 2024
  // =================================================================================
  "fema-2024": {
    title: "Amendments under the Foreign Exchange Management Act (FEMA) – 2024",
    author: "Team Maglaw",
    date: "2024",
    readTime: "10 min read",
    category: "FEMA Updates",
    sections: [
      {
        title: "1. Foreign Exchange Management (Mode of Payment and Reporting of Non-Debt Instruments) (Amendment) Regulations, 2024",
        body: `
          <div class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden mb-6">
            <div class="bg-blue-50 px-6 py-3 border-b border-blue-100 flex justify-between items-center">
               <span class="font-bold text-blue-900">🗓 Notification Date</span>
               <span class="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded">23 April 2024</span>
            </div>
            <div class="p-6">
              <h4 class="font-bold text-gray-900 mb-3">Key Amendments</h4>
              <ul class="list-disc pl-5 space-y-3 text-gray-700">
                <li>Introduced new modes of payment for acquisition of shares listed on international exchanges, enhancing global capital flow opportunities.</li>
                <li>Strengthened reporting requirements to improve transparency and regulatory oversight of foreign investment transactions.</li>
                <li>Streamlined remittance of sale proceeds, enabling smoother repatriation of funds by non-resident investors.</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        title: "2. Foreign Exchange Management (Foreign Currency Accounts by a Person Resident in India) (Amendment) Regulations, 2024",
        body: `
          <div class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden mb-6">
            <div class="bg-green-50 px-6 py-3 border-b border-green-100 flex justify-between items-center">
               <span class="font-bold text-green-900">🗓 Notification Date</span>
               <span class="text-xs bg-green-200 text-green-800 px-2 py-1 rounded">23 April 2024</span>
            </div>
            <div class="p-6">
              <h4 class="font-bold text-gray-900 mb-3">Key Amendments</h4>
              <ul class="list-disc pl-5 space-y-3 text-gray-700">
                <li>Amended Regulation 5, sub-regulation (F)(1), offering greater clarity on the operation and management of foreign currency accounts.</li>
                <li>Established a formal linkage between foreign currency accounts and overseas listings, supporting participation of Indian founders and companies in global financial markets.</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        title: "3. Foreign Exchange Management (Deposit) (Fourth Amendment) Regulations, 2024",
        body: `
          <div class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden mb-6">
            <div class="bg-purple-50 px-6 py-3 border-b border-purple-100 flex justify-between items-center">
               <span class="font-bold text-purple-900">🗓 Notification Date</span>
               <span class="text-xs bg-purple-200 text-purple-800 px-2 py-1 rounded">06 May 2024</span>
            </div>
            <div class="p-6">
              <h4 class="font-bold text-gray-900 mb-3">Key Amendments</h4>
              <ul class="list-disc pl-5 space-y-3 text-gray-700">
                <li>Permitted non-residents to open and maintain dedicated margin accounts in India for derivative transactions.</li>
                <li>Allowed such accounts to be maintained in Indian Rupees or foreign currency, providing flexibility in settlement.</li>
                <li>Strengthened India’s derivatives ecosystem by enabling easier foreign investor participation.</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        title: "4. Foreign Exchange Management (Foreign Currency Accounts by a Person Resident in India) (Amendment) Regulations, 2024",
        body: `
          <div class="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-r-xl">
             <h4 class="font-bold text-orange-900 mb-3">Key Amendments</h4>
             <ul class="space-y-3 text-gray-800 list-disc pl-5">
               <li>Updated the definition of “Startup” in line with the latest DPIIT notification, aligning FEMA provisions with current government policies.</li>
               <li>Provided clarity on startup eligibility for opening foreign currency accounts and raising cross-border capital.</li>
               <li>Reduced interpretational gaps for residents and authorised dealers handling startup-related foreign exchange transactions.</li>
             </ul>
          </div>
        `
      }
    ]
  }
};

const BlogDetail = () => {
  const { id } = useParams();
  const post = DATA[id || ""];

  useEffect(() => window.scrollTo(0, 0), []);

  if (!post) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-32 pb-24 text-center">
          <h1 className="text-xl font-semibold mb-4">Article not found</h1>
          <Link to="/blogs" className="inline-block border border-primary px-6 py-2 rounded text-primary hover:bg-primary hover:text-white transition-colors">
            Back to Blogs
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          
          <Link to="/blogs" className="inline-flex items-center gap-2 border border-primary text-primary px-5 py-2 rounded-md mb-8 hover:bg-primary hover:text-white transition-all duration-300">
            <ArrowLeft size={16} /> Back to Blogs
          </Link>

          <article className="bg-white rounded-xl shadow-lg p-6 md:p-10 border border-gray-100">
            
            <div className="mb-6">
              <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                {post.category}
              </span>

              <h1 className="text-3xl md:text-4xl font-serif font-bold leading-tight mb-2 text-gray-900">
                {post.title}
              </h1>
              
              {post.subtitle && (
                <p className="text-lg text-gray-600 mb-6 italic">
                  {post.subtitle}
                </p>
              )}

              <div className="flex flex-wrap gap-4 md:gap-6 text-muted-foreground text-sm border-b pb-6">
                <span className="flex items-center">
                  <User className="w-4 h-4 mr-2" /> {post.author}
                </span>
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" /> {post.date}
                </span>
                <span className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" /> {post.readTime}
                </span>
              </div>
            </div>

            <div className="space-y-10">
              {post.sections.map((section: Section, index: number) => (
                <section key={index}>
                  {section.title && (
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-primary pl-3">
                      {section.title}
                    </h2>
                  )}
                  {/* Dangerously setting HTML to allow rich formatting from DATA */}
                  <div 
                    className="prose max-w-none text-gray-600 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: section.body }} 
                  />
                </section>
              ))}
            </div>

          </article>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogDetail;