import Image from "next/image";
import Link from "next/link";
import { EqualHousingLenderLogo } from "@/components/EqualHousingLenderLogo";
import { UffPhoneLink } from "@/components/UffPhone";
import { COMPANY_NMLS, NMLS_CONSUMER_ACCESS, TAGLINE } from "@/lib/constants";
import { marketingPhotos } from "@/lib/marketingPhotos";
import { LICENSED_STATES } from "@/lib/licenseStates";

const homeFaqContent = [
  {
    q: "Who is HomeLoanAgents?",
    a: "HomeLoanAgents is a trade name of United Fidelity Funding Corp., NMLS #34381, a licensed mortgage lender. We originate home purchase and refinance loans in the states where we are licensed. We are not a bank, and we are not a government agency.",
  },
  {
    q: "Are you a lender or a broker?",
    a: "We are a mortgage lender. Loans are originated by United Fidelity Funding Corp. We are not a marketplace that shops your file to a list of unrelated lenders.",
  },
  {
    q: "What does the $3,500 fee include?",
    a: "The $3,500 is a flat lender origination fee. It covers underwriting, processing, and the credit report. It does not include third-party or prepaid items such as the appraisal, title, prepaid interest, taxes, or insurance. Those appear separately on your Loan Estimate.",
  },
  {
    q: "Will checking my options affect my credit?",
    a: "Starting online and exploring options does not affect your credit score. If you later submit a full application, a credit report will be used as part of underwriting, and that step will be explained to you first.",
  },
  {
    q: "Who underwrites my loan?",
    a: "A human underwriter reviews your file and is responsible for the credit decision. AI agents help gather and organize documents so the work is easier to follow. They do not approve or deny the loan.",
  },
  {
    q: "Which states are you licensed in?",
    a: `United Fidelity Funding Corp. is licensed in ${LICENSED_STATES}. License names and numbers are on our Licensing & Disclosures page. Availability of a specific loan program can vary by state.`,
  },
  {
    q: "Is there a cost or obligation to start?",
    a: "There is no cost or obligation to start online and talk through your options. If you move forward with an application, third-party costs such as an appraisal may apply, and they will be disclosed before you are asked to pay them.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="marketing-wrap home-hero-grid">
          <div className="home-hero-copy">
            <p className="home-eyebrow">{TAGLINE}</p>
            <h1>A mortgage company built for clear answers.</h1>
            <p className="home-lede">
              HomeLoanAgents is a licensed mortgage lender. AI agents gather and organize your file so you can
              see where things stand. Human mortgage professionals and underwriters review and decide.
            </p>
            <div className="home-hero-actions">
              <Link href="/get-started" className="btn-marketing btn-lg-marketing">
                Get started
              </Link>
              <Link href="#fee" className="btn-marketing btn-ghost-marketing btn-lg-marketing">
                See the $3,500 lender fee
              </Link>
            </div>
            <ul className="home-hero-bullets">
              <li>Start online with no impact to your credit score.</li>
              <li>
                One flat $3,500 lender origination fee covering underwriting, processing, and the credit report.
              </li>
              <li>Human underwriters supervise every file.</li>
            </ul>
          </div>
          <div className="home-hero-photo">
            <Image
              src={marketingPhotos.heroKitchen.src}
              alt={marketingPhotos.heroKitchen.alt}
              fill
              priority
              sizes="(max-width: 980px) 100vw, 55vw"
            />
          </div>
        </div>
      </section>

      <div className="home-trust">
        <div className="marketing-wrap home-trust-inner">
          <div className="home-trust-item">
            <EqualHousingLenderLogo className="eh-trust" variant="trust" />
            <span>Equal Housing Lender</span>
          </div>
          <div className="home-trust-item">
            <span>
              NMLS #<a href={NMLS_CONSUMER_ACCESS}>{COMPANY_NMLS}</a>
            </span>
          </div>
          <div className="home-trust-item">
            <span>HomeLoanAgents is a trade name of United Fidelity Funding Corp.</span>
          </div>
          <div className="home-trust-item">
            <span>
              Licensed mortgage lender · <Link href="/licensing">See state licenses</Link>
            </span>
          </div>
        </div>
      </div>

      <section className="marketing-block alt" id="buy">
        <div className="marketing-wrap">
          <p className="marketing-kicker">Your next step</p>
          <h2 className="marketing-section-h">Buy a home or refinance the one you have.</h2>
          <p className="marketing-section-sub">
            Tell us what you are working toward. We will walk you through loan options, documents, and next steps,
            without a hard credit pull to start.
          </p>
          <div className="journey-grid">
            <Link href="/buy" className="card-photo">
              <div className="card-media">
                <Image
                  src={marketingPhotos.buyPorch.src}
                  alt={marketingPhotos.buyPorch.alt}
                  width={800}
                  height={600}
                  sizes="(max-width: 980px) 100vw, 50vw"
                />
              </div>
              <div className="card-body">
                <h3>Buy a home</h3>
                <p>
                  See loan options for a first home, a next home, or a property that needs a different kind of
                  financing.
                </p>
                <span className="card-link-arrow">Explore buying</span>
              </div>
            </Link>
            <Link href="/refinance" className="card-photo" id="refinance">
              <div className="card-media">
                <Image
                  src={marketingPhotos.refiTable.src}
                  alt={marketingPhotos.refiTable.alt}
                  width={800}
                  height={600}
                  sizes="(max-width: 980px) 100vw, 50vw"
                />
              </div>
              <div className="card-body">
                <h3>Refinance</h3>
                <p>
                  Look at changing a rate or term, or using equity, and see whether refinancing fits your goals
                  today.
                </p>
                <span className="card-link-arrow">Explore refinancing</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="marketing-block" id="difference">
        <div className="marketing-wrap">
          <p className="marketing-kicker">How we work</p>
          <h2 className="marketing-section-h">AI organizes. Humans decide.</h2>
          <p className="marketing-section-sub">
            Software helps collect and organize documents so nothing sits in a black box. Licensed mortgage
            professionals guide you. Human underwriters make the credit decision.
          </p>
          <div className="diff-grid">
            <article className="diff-card">
              <div className="card-media">
                <Image
                  src={marketingPhotos.familyLiving.src}
                  alt={marketingPhotos.familyLiving.alt}
                  width={600}
                  height={400}
                  sizes="33vw"
                />
              </div>
              <div className="card-body">
                <h3>Clear as you go</h3>
                <p>You can see what has been received, what is still needed, and where your file stands.</p>
              </div>
            </article>
            <article className="diff-card">
              <div className="card-media">
                <Image
                  src={marketingPhotos.advisorMeeting.src}
                  alt={marketingPhotos.advisorMeeting.alt}
                  width={600}
                  height={400}
                  sizes="33vw"
                />
              </div>
              <div className="card-body">
                <h3>Guidance from a professional</h3>
                <p>A licensed person reviews your goals and options and stays with you through the process.</p>
              </div>
            </article>
            <article className="diff-card">
              <div className="card-media">
                <Image
                  src={marketingPhotos.underwriter.src}
                  alt={marketingPhotos.underwriter.alt}
                  width={600}
                  height={400}
                  sizes="33vw"
                />
              </div>
              <div className="card-body">
                <h3>Human underwriters supervise</h3>
                <p>
                  Every file is reviewed by a human underwriter. Technology helps organize the work. It does not
                  replace the decision.
                </p>
              </div>
            </article>
          </div>
          <p className="theme-line">{TAGLINE}</p>
        </div>
      </section>

      <section className="marketing-block alt" id="fee">
        <div className="marketing-wrap fee-grid">
          <div className="fee-amount-panel">
            <p className="fee-label">Lender origination fee</p>
            <p className="fee-price">$3,500</p>
            <p className="tag">A flat fee, not a percentage of the loan amount.</p>
            <p>
              The fee does not rise just because the loan is larger. Third-party and prepaid items are separate and
              will be itemized on your Loan Estimate.
            </p>
          </div>
          <div>
            <p className="marketing-kicker">A clear lender fee</p>
            <h2 className="marketing-section-h">What the $3,500 covers, and what it does not.</h2>
            <ul className="inc-list">
              <li>Underwriting</li>
              <li>Processing</li>
              <li>The credit report</li>
            </ul>
            <ul className="exc-list">
              <li>
                Third-party and prepaid items such as appraisal, title, prepaid interest, taxes, and insurance.
                These are separate and itemized.
              </li>
            </ul>
            <p className="fee-fine">
              This is a lender origination fee, not a quote for your total closing costs, interest rate, or
              monthly payment. It is not an offer or commitment to lend.
            </p>
          </div>
        </div>
      </section>

      <section className="marketing-block" id="programs">
        <div className="marketing-wrap">
          <p className="marketing-kicker">Loan options</p>
          <h2 className="marketing-section-h">Programs for different kinds of borrowers.</h2>
          <p className="marketing-section-sub">
            We originate purchase and refinance loans, including conventional, FHA, VA, USDA, jumbo, and other
            options where available in your state. Eligibility depends on the property, your profile, and the
            program.
          </p>
          <div className="programs-grid">
            <Link href="/buy/first-time-homebuyers" className="program-card">
              <div className="card-media">
                <Image src={marketingPhotos.buyPorch.src} alt="" width={640} height={400} sizes="33vw" />
              </div>
              <div className="card-body">
                <h3>I&apos;m buying my first home</h3>
                <p>Guidance and loan options built for a first purchase, from the first question through closing.</p>
                <span className="card-link-arrow">Learn more</span>
              </div>
            </Link>
            <Link href="/loans/fha" className="program-card">
              <div className="card-media">
                <Image src={marketingPhotos.familyLiving.src} alt="" width={640} height={400} sizes="33vw" />
              </div>
              <div className="card-body">
                <h3>I want a lower down payment</h3>
                <p>
                  FHA, VA, USDA, and conventional low-down options, when you qualify, can help you buy with less cash
                  up front.
                </p>
                <span className="card-link-arrow">Learn more</span>
              </div>
            </Link>
            <Link href="/loans/va" className="program-card">
              <div className="program-media-blank">VA</div>
              <div className="card-body">
                <h3>I want to use VA benefits</h3>
                <p>
                  VA loan options for eligible veterans, service members, and surviving spouses, including zero-down
                  programs where available.
                </p>
                <span className="card-link-arrow">Learn more</span>
              </div>
            </Link>
            <Link href="/loans/conventional" className="program-card">
              <div className="program-media-blank">Fixed</div>
              <div className="card-body">
                <h3>I want a predictable payment</h3>
                <p>Fixed-rate mortgages designed so principal and interest stay the same for the life of the loan.</p>
                <span className="card-link-arrow">Learn more</span>
              </div>
            </Link>
            <Link href="/loans/jumbo" className="program-card">
              <div className="program-media-blank">Jumbo</div>
              <div className="card-body">
                <h3>I&apos;m looking at a higher-priced home</h3>
                <p>Jumbo and high-balance options for homes above conforming loan limits.</p>
                <span className="card-link-arrow">Learn more</span>
              </div>
            </Link>
            <Link href="/refinance" className="program-card">
              <div className="card-media">
                <Image src={marketingPhotos.refiTable.src} alt="" width={640} height={400} sizes="33vw" />
              </div>
              <div className="card-body">
                <h3>I want to refinance</h3>
                <p>
                  Rate-and-term or cash-out options, depending on your equity, goals, and what you qualify for.
                </p>
                <span className="card-link-arrow">Learn more</span>
              </div>
            </Link>
          </div>
        </div>


      <section className="marketing-block alt" id="calculators">
        <div className="marketing-wrap">
          <p className="marketing-kicker">Tools</p>
          <h2 className="marketing-section-h">Run the numbers. No commitment.</h2>
          <p className="marketing-section-sub">
            Use payment, affordability, and refinance calculators to explore scenarios. Results are estimates only.
            They are not a rate quote, an offer, or a commitment to lend.
          </p>
          <div className="calc-frame">
            <span className="calc-badge">Placeholder</span>
            <div className="calc-grid">
              <div className="calc-tile">
                <h3>Payment</h3>
                <p className="fake-box">Calculator coming soon</p>
              </div>
              <div className="calc-tile">
                <h3>Affordability</h3>
                <p className="fake-box">Calculator coming soon</p>
              </div>
              <div className="calc-tile">
                <h3>Refinance comparison</h3>
                <p className="fake-box">Calculator coming soon</p>
              </div>
            </div>
            <p className="fee-fine">
              Embeddable calculators from Dett.io will appear here in a future release, styled to HomeLoanAgents colors
              with assumption text and a reminder that estimates are not an offer to lend.
            </p>
          </div>
        </div>
      </section>

      <section className="marketing-block" id="process">
        <div className="marketing-wrap">
          <p className="marketing-kicker">The process</p>
          <h2 className="marketing-section-h">How a file moves, from start to close.</h2>
          <p className="marketing-section-sub">
            Timelines vary by loan, property, and the documents involved. We will not promise an approval or a closing
            date on this page.
          </p>
          <div className="steps-grid">
            <article className="step-card">
              <h3>Start online</h3>
              <p>Tell us whether you are buying or refinancing and share a few basics. Starting does not affect your credit score.</p>
            </article>
            <article className="step-card">
              <h3>Review with a professional</h3>
              <p>A mortgage professional looks at your goals and options with you and explains what comes next.</p>
            </article>
            <article className="step-card">
              <h3>Share your documents</h3>
              <p>You upload what is needed. AI agents help organize the file so you can see what has arrived and what is still outstanding.</p>
            </article>
            <article className="step-card">
              <h3>Human underwriting</h3>
              <p>A human underwriter reviews the file and issues conditions or a clear-to-close decision.</p>
            </article>
            <article className="step-card">
              <h3>Close</h3>
              <p>You review and sign closing documents with the same visibility you had at the start.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="marketing-block alt" id="people">
        <div className="marketing-wrap">
          <p className="marketing-kicker">People in the process</p>
          <h2 className="marketing-section-h">You work with people, not only a form.</h2>
          <p className="marketing-section-sub">Photos are illustrative.</p>
          <div className="people-grid">
            <figure className="portrait">
              <Image src={marketingPhotos.advisorMeeting.src} alt={marketingPhotos.advisorMeeting.alt} width={800} height={560} />
              <figcaption>
                <strong>Mortgage professionals</strong>
                Licensed people who help you understand options, documents, and next steps.
              </figcaption>
            </figure>
            <figure className="portrait">
              <Image src={marketingPhotos.underwriter.src} alt={marketingPhotos.underwriter.alt} width={800} height={560} />
              <figcaption>
                <strong>Human underwriters</strong>
                Credit decisions are made by people who review your file, not by an automated headline.
              </figcaption>
            </figure>
          </div>
          <p className="placeholder-note">
            <strong>Customer stories placeholder.</strong> Reviews and borrower stories will be published here only
            with permission and a real attribution. We do not show sample, composite, or invented reviews or ratings.
          </p>
        </div>
      </section>

      <section className="marketing-block" id="learning">
        <div className="marketing-wrap">
          <p className="marketing-kicker">Learning center</p>
          <h2 className="marketing-section-h">Mortgage guides, when you want them.</h2>
          <div className="learn-grid">
            <article>
              <p className="learn-tag">Buying</p>
              <h3>How a pre-approval differs from an approval</h3>
              <p>What a pre-approval can and cannot tell a seller, and why it is not a commitment to lend.</p>
              <Link href="/learn/mortgage-process">Read the guide</Link>
            </article>
            <article>
              <p className="learn-tag">Costs</p>
              <h3>What closing costs include, and how the $3,500 fee fits</h3>
              <p>A walk-through of lender fees versus third-party and prepaid items on a Loan Estimate.</p>
              <Link href="/learn/closing-costs">Read the guide</Link>
            </article>
            <article>
              <p className="learn-tag">Refinancing</p>
              <h3>When refinancing may or may not make sense</h3>
              <p>
                How to think about payments, term, and costs, including that refinancing may increase total finance
                charges over the life of the loan.
              </p>
              <Link href="/learn/what-affects-your-rate">Read the guide</Link>
            </article>
          </div>
        </div>
      </section>

      <section className="marketing-block alt" id="faq">
        <div className="marketing-wrap">
          <p className="marketing-kicker">Questions</p>
          <h2 className="marketing-section-h">A few things people ask first.</h2>
          <div className="home-faq">
            {homeFaqContent.map((item) => (
              <details key={item.q} className="qa" open={item.q === homeFaqContent[0].q}>
                <summary>{item.q}</summary>
                <div className="faq-answer">
                  {item.q === "Which states are you licensed in?" ? (
                    <>
                      United Fidelity Funding Corp. is licensed in {LICENSED_STATES}. License names and numbers are on
                      our <Link href="/licensing">Licensing &amp; Disclosures</Link> page. Availability of a specific
                      loan program can vary by state.
                    </>
                  ) : (
                    item.a
                  )}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="home-final-cta" id="start">
        <Image
          src={marketingPhotos.ctaDoorway.src}
          alt={marketingPhotos.ctaDoorway.alt}
          fill
          className="cta-bg"
          sizes="100vw"
        />
        <div className="cta-veil" aria-hidden />
        <div className="home-final-panel">
          <h2>When you are ready, start online or call.</h2>
          <p>
            A mortgage professional will review your goals with you. Starting does not affect your credit score, and it
            is not a commitment to lend.
          </p>
          <Link href="/get-started" className="btn-marketing btn-lg-marketing">
            Get started
          </Link>
          <UffPhoneLink className="phone-lg-marketing" />
        </div>
      </section>
      </section>
    </>
  );
}