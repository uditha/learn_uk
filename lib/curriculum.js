/** FRE1 / FRE2 curriculum extracted from regulatory-runway.html */
/* FRE1 Topic 1 — The role and structure of financial markets */
const T1 = {n:"Topic 1", t:"Markets, money & institutions", ac:"AC1.1, AC1.2, AC1.4", m:[

{id:"t1a", title:"What money actually is", sub:"Three functions, four properties", cards:[
 {t:"teach", h:"Barter breaks at scale", b:"<p>A poultry farmer could swap eggs for a gardener's vegetables. Modern life's complexity and the sheer size of some transactions make bartering impossible in practice.</p><p>Money is a separate commodity that people accept in exchange for products, and a common denominator for valuing them.</p>",
  k:["<strong>Medium of exchange</strong> — everyone accepts it","<strong>Unit of account</strong> — a common yardstick for value","<strong>Store of value</strong> — hold it today, spend it later"],
  hook:"MUS — Medium, Unit, Store."},
 {t:"teach", h:"The four properties", b:"<p>To be acceptable as a medium of exchange, money must be:</p>",
  k:["<strong>Sufficient in quantity</strong>","<strong>Generally acceptable</strong> to all parties in all transactions","<strong>Divisible</strong> into small units","<strong>Portable</strong>"],
  note:{b:"Exam trap", x:"'Limited in quantity' is NOT one of the properties — the text says <em>sufficient</em> in quantity. That swap is exactly how the question is written."},
  hook:"SAD-P: Sufficient, Acceptable, Divisible, Portable."},
 {t:"check", q:"Which is NOT one of the properties required for money to be acceptable as a medium of exchange?", o:["Portability","Divisible into small units","Acceptable to all parties","Limited in quantity"], a:3,
  e:"Money must be sufficient in quantity, not limited. The other three are on the list."},
 {t:"teach", h:"Legal tender, and 'money' beyond cash", b:"<p>Certain banknotes and coins are <strong>legal tender</strong> — they must be accepted in settlement of a debt.</p><p>But 'money' is wider than cash: it includes current and deposit account balances and other forms of investment. The industry exists to channel money from those with a surplus who want to lend, to those willing to pay to borrow — it 'oils the wheels' of commerce.</p>"},
 {t:"teach", h:"Digital pound vs cryptoassets", b:"<p>The Bank of England published a CBDC discussion paper in March 2020, then a consultation paper with HM Treasury in February 2023. A joint BoE/HM Treasury taskforce is exploring it.</p>",
  tbl:[["Digital pound (CBDC)","A new form of sterling, like a digital banknote issued by the Bank. <strong>Centralised.</strong> Used alongside cash and bank deposits."],["Cryptoasset","A digital store of value that can be transferred without a centralised authority like a bank or country. <strong>Decentralised.</strong>"]]},
 {t:"check", q:"The defining difference between a digital pound and a cryptoasset is that the digital pound would be:", o:["Backed by gold","Centralised — issued and controlled by the Bank of England","Free of transaction fees","Capped in supply by an algorithm"], a:1,
  e:"Centralisation is the whole distinction. A CBDC would sit alongside cash and bank deposits, not replace them."}]},

{id:"t1b", title:"The four asset classes", sub:"Cash, bonds, equities, property", cards:[
 {t:"teach", h:"Asset class, defined", b:"<p>An <strong>asset</strong> is something with monetary value owned by an individual or firm. An <strong>asset class</strong> groups assets that share characteristics and behave in a similar way.</p><p>They are not products — though products, such as insurance, can be based on them. Four main classes: cash, fixed interest securities, shares, property.</p>"},
 {t:"teach", h:"Cash: liquid, secure, quietly shrinking", b:"<p>Cash is liquid, doesn't need converting, and won't lose its <em>nominal</em> value. But it can't grow, so inflation erodes its <em>real</em> value.</p>",
  note:{b:"The book's own figures", x:"A £100 note from October 2014 was still £100 in October 2024 — but bought only £74 worth. The same £100 item would cost £135. UK inflation averaged 4.9% a year between 1955 and 2023."},
  hook:"Cash is safe in name, not in value."},
 {t:"teach", h:"Bonds and money market instruments", b:"",
  tbl:[["Bonds","Loan instruments from governments and corporations, terms <strong>over five years</strong> (typically 5–30). Three features: <strong>coupon</strong> (fixed annual interest), <strong>par value</strong> (repaid at redemption), <strong>redemption date</strong>."],["Money market instruments","Short-term, usually <strong>up to 12 months</strong>: commercial paper, certificates of deposit, Treasury bills. Effectively cash equivalents."]],
  note:{b:"Exam trap", x:"'Variable interest rates over a set term' is not a feature of a bond. The rate is fixed — that's the definition."}},
 {t:"check", q:"Which is NOT a feature of a bond?", o:["A coupon","Par value","Redemption date","Variable interest over a set term"], a:3,
  e:"Bonds offer a fixed rate of interest for a set term. Coupon, par value and redemption date are the three defining features."},
 {t:"teach", h:"Equities and property", b:"",
  tbl:[["Shares (equities)","Raising <strong>capital, not a loan</strong>. Shareholders own the company and have a say in it. Never mature — no redemption date. Traded on an active secondary market."],["Property","Return is <strong>rent plus capital growth</strong>. Residential and commercial. Commercial is less volatile than equities because much of the return is stable rent."]],
  note:{b:"Property's drawbacks", x:"Vulnerable to recession, lack of tenants hits returns, high buying and running costs, illiquid, plus rental and maintenance management costs."}},
 {t:"check", q:"From a company's perspective, the purpose of the equity market is:", o:["Access to borrowing","A facility to buy bonds","Capital raising","Access to investments"], a:2,
  e:"Shares raise capital — money the company keeps and invests. It is not a loan and there's no obligation to redeem."}]},

{id:"t1c", title:"How markets are classified", sub:"Supply, demand and five dividing lines", cards:[
 {t:"teach", h:"Equilibrium price", b:"<p>Prices rise when demand outstrips supply and fall when supply outstrips demand. Sellers want the highest price, buyers the lowest; they compromise.</p><p>The point where supply and demand balance is <strong>equilibrium</strong>, and the compromise price is the <strong>equilibrium price</strong>. It moves continually, though it can be stabilised by controlling output.</p>"},
 {t:"check", q:"The 'equilibrium price' usually arises when:", o:["Supply exceeds demand","Supply and demand are balanced","Demand exceeds supply","Sellers exceed buyers"], a:1,
  e:"Balance is the definition. Everything else describes pressure pushing the price away from equilibrium."},
 {t:"teach", h:"Five ways to slice a market", b:"",
  tbl:[["Maturity / term","<strong>Money markets</strong> = short-term (interbank, T-bills, commercial paper) providing liquidity. <strong>Capital markets</strong> = long-term (bonds, equities) funding investment."],["Retail or wholesale","Retail = individuals and small firms, small transactions. Wholesale = large firms, institutions and government, large sums, low margins."],["Secured or unsecured","Secured borrowing is backed by an asset, so it is cheaper — the lender has rights over the asset on default."],["Primary or secondary","Primary raises <strong>new</strong> capital. Secondary trades existing securities. Most equity trading is secondary."],["Domestic or foreign currency","International trade requires currency exchange."]],
  hook:"MRS PD — Maturity, Retail/wholesale, Secured, Primary, Domestic."},
 {t:"teach", h:"Why the secondary market matters", b:"<p>A wide, flourishing secondary market provides liquidity and is <strong>essential</strong> for primary business. Few investors would buy shares in the first place if they couldn't expect to sell them later.</p><p>A strong secondary market reduces the risk of dealing in the primary market — and so makes the primary market possible.</p>"},
 {t:"check", q:"Which statement is correct?", o:["Money markets are where long-term borrowing takes place","Capital markets are where shares are traded","An individual sells company shares in the primary market","A bank would borrow large sums in the retail market"], a:1,
  e:"Capital markets = long-term = bonds and equities. Money markets are short-term; existing shares change hands in the secondary market; banks raise large sums wholesale."}]},

{id:"t1d", title:"The five main markets", sub:"Interbank, bond, equity, FX, insurance", cards:[
 {t:"teach", h:"Interbank: Libor's fall, Sonia's rise", b:"<p>The interbank market is <strong>unsecured</strong> wholesale lending between banks and large institutions, mainly overnight to six months, typically under three months. Over 400 banking institutions, usually dealing via money brokers. It lets institutions adjust liquidity positions.</p><p>Libor was the reference rate until the end of 2021. After manipulation scandals, <strong>Sonia</strong> — the sterling overnight index average — became the industry standard from 1 January 2022. It is based on <em>actual</em> wholesale overnight transactions, not on what banks say they'd lend at, so it's close to a risk-free measure.</p>",
  hook:"Libor was an opinion. Sonia is a receipt."},
 {t:"teach", h:"Bond market: the S&P ladder", b:"",
  tbl:[["AAA to BBB","<strong>Investment grade</strong> — stable, lower risk."],["BB","<strong>Junk</strong> — vulnerable to changes in the economy."],["C","Significant risk of defaulting on obligations."],["D","Has already defaulted on some or all obligations."]],
  note:{b:"The knock-on", x:"A downgrade makes investors demand a higher yield to compensate — so the bond's price falls. Shorter-dated bonds are less volatile, so investors accept a lower yield."}},
 {t:"check", q:"S&P Global rates a company BB. Its bonds are:", o:["Stable and lower risk","Showing significant risk of default","Vulnerable to changes in the economy","High yielding and low risk"], a:2,
  e:"BB is the top rung of junk: vulnerable to the economy. 'Significant risk of default' is C; D has already defaulted."},
 {t:"teach", h:"Equity market and the LSE", b:"<p><strong>Primary</strong>: new plcs issue their first shares — an initial public offering (IPO) or flotation — and existing companies issue more via a rights issue. <strong>Secondary</strong>: the majority of trades, in listed securities.</p><p>An LSE listing implies the company is reputable; permission to deal can be withdrawn if conduct is questioned. Main overseas indices: Dow Jones and NASDAQ (USA), Nikkei (Japan), DAX (Germany), CAC40 (France).</p>"},
 {t:"teach", h:"FX and reinsurance", b:"",
  tbl:[["Foreign exchange","An international market where currencies are exchanged — <strong>not</strong> a market where money is borrowed or lent. Three reasons to convert: international trade, short-term investment, long-term investment."],["Insurance","Individuals and firms transfer risk to insurers for a premium."],["Reinsurance","Insurers parcel up risks they've accepted and sell 'bits' to other insurers while buying parts of theirs. A large loss is spread across the market."]]},
 {t:"check", q:"The reinsurance market is designed to:", o:["Enable individuals to arrange insurance","Provide access to specialist policies","Help insurance companies manage risk","Help policyholders switch policies"], a:2,
  e:"It's insurers diversifying among themselves. The insured simply claims from the company that first accepted the risk."}]},

{id:"t1e", title:"Intermediation", sub:"Four problems the middleman solves", cards:[
 {t:"teach", h:"Surplus meets deficit", b:"<p>Every economy has a <strong>surplus sector</strong> (those wanting to earn from spare funds) and a <strong>deficit sector</strong> (those willing to pay to borrow). A financial intermediary borrows from one at a lower rate and lends to the other at a higher rate — the difference is its margin.</p>"},
 {t:"teach", h:"The four functions", b:"",
  tbl:[["Geographic location","Brings together lenders and borrowers across the country who'd never find each other — a Yorkshire saver funding an Essex borrower."],["Aggregation","Retail deposits average under £1,000; loans are much bigger. Pool the small deposits."],["Maturity transformation","Savers want access now, borrowers want long terms. A wide range of accounts means not all deposits are withdrawn at once."],["Risk transformation","One small lender can't survive one default. Spread lending across many borrowers and absorb the odd loss."]],
  note:{b:"Exam trap", x:"'Equalisation' is the classic wrong option. Four functions, and geographic location is the one students forget."},
  hook:"GARM — Geography, Aggregation, Risk, Maturity."},
 {t:"check", q:"A bank uses deposits from several savers to fund one large loan. This is:", o:["Aggregation","Maturity transformation","Risk transformation","Disintermediation"], a:0,
  e:"Several small deposits combined to meet one need is aggregation. Maturity transformation is about the mismatch in <em>time</em>, not size."},
 {t:"check", q:"A 25-year mortgage funded from instant-access savings accounts demonstrates:", o:["Aggregation","Maturity transformation","Geographic location","Risk transformation"], a:1,
  e:"Short-term money in, long-term money out. The bank relies on not everyone withdrawing at once."},
 {t:"teach", h:"Disintermediation", b:"<p>Lenders and borrowers, or investors and organisations, interacting <strong>directly</strong> rather than through an intermediary.</p><p>Classic example: a company issuing shares to raise funds from the public. A bank may help attract investors — but for a fee, not a margin on the deal. That fee-versus-margin distinction is the tell.</p>"}]},

{id:"t1f", title:"Who owns the institution", sub:"Proprietary, mutual and the 50% rule", cards:[
 {t:"teach", h:"Two ownership models", b:"",
  tbl:[["Proprietary","Owned by <strong>shareholders</strong>, who take dividends and vote at shareholders' meetings. The great majority of large UK institutions."],["Mutual","Not constituted as a company, no shareholders. Owned by <strong>members</strong>, who decide management through general meetings."]],
  note:{b:"Who are 'members'?", x:"For a building society: its depositors and borrowers. For a mutual life company: the with-profits policyholders."}},
 {t:"teach", h:"Mutuals beyond building societies", b:"<p><strong>Friendly societies</strong> and some life companies are mutual. So are <strong>credit unions</strong> — financial co-operatives owned by and run for members linked in a particular way (same area, club, church, employer).</p><p>Credit unions began with simple savings and loans for people outside the financial mainstream, and now play a role in combating financial exclusion, often offering basic bank accounts, insurance and mortgages with partners.</p><p>Since the Building Societies Act 1986 a society can <strong>demutualise</strong> — convert to a bank as a plc, gaining a wider range of activities with fewer restrictions.</p>"},
 {t:"check", q:"Which would NOT be a mutual organisation?", o:["Nationwide Building Society","A credit union","Barclays Bank","Foresters Friendly Society"], a:2,
  e:"A bank is a company owned by shareholders. Mutuals aren't constituted as companies and have no shareholders."},
 {t:"teach", h:"The 50% wholesale limit", b:"<p>Building societies may raise up to <strong>50% of their funding</strong> on the wholesale markets — keeping them funded mainly by members' savings.</p>",
  note:{b:"The nuance behind the trap", x:"The Building Societies (Funding) and Mutual Societies (Transfer) Act 2007 lets the Treasury raise the limit to 75% without new primary legislation — but it has never been used. So 50% is the answer; 75% is the plausible-looking distractor."}},
 {t:"check", q:"What level of funding can a building society raise on the wholesale markets?", o:["25%","33%","50%","75%"], a:2,
  e:"50%. The Treasury has power to lift it to 75%, but has not exercised it."},
 {t:"teach", h:"Clearing and ring-fencing", b:"<p><strong>Clearing</strong> is the end-of-day settlement of transfers between banks from cheques, direct debits and card payments. One bank owes the other a net figure, settled through accounts held at the Bank of England.</p><p><strong>Ring-fencing</strong> came from the Financial Services (Banking Reform) Act 2013: retail deposits sit in ring-fenced bodies, separate from investment and wholesale arms, and prohibited from activities such as dealing in investments as principal. Customer money can't fund the firm's own investment activity or bail it out.</p>"}]},

{id:"t1g", title:"The Payment Systems Regulator", sub:"Three objectives, one subsidiary", cards:[
 {t:"teach", h:"An FCA subsidiary with its own objectives", b:"<p>The PSR is an <strong>independent subsidiary of the FCA</strong>, established April 2014 and operational April 2015, with its own statutory objectives, governance, managing director and board.</p><p>It aims to make payment systems accessible, reliable, secure and value for money.</p>"},
 {t:"teach", h:"The three statutory objectives", b:"",
  k:["<strong>Promote competition</strong>","<strong>Encourage innovation</strong>","Ensure systems are operated and developed in the interests of <strong>service users</strong>"],
  hook:"CIS — Competition, Innovation, Service users."},
 {t:"check", q:"Which is NOT a statutory objective of the PSR?", o:["Promoting competition","Encouraging innovation","Serving the interests of service users","Setting interchange fees for retailers"], a:3,
  e:"Three objectives only. Fee-setting isn't one of them."}]},

{id:"t1h", title:"Financial crime", sub:"Four elements, four Acts", cards:[
 {t:"teach", h:"What counts as financial crime", b:"<p>Any criminal conduct relating to money, financial services or markets — including offences involving:</p>",
  k:["Fraud or dishonesty","Misconduct in, or misuse of information relating to, a financial market","Handling the proceeds of crime","The financing of terrorism"],
  note:{b:"Scope", x:"An 'offence' includes an act or omission that would be an offence if it had happened in the UK."}},
 {t:"teach", h:"Match the crime to the Act", b:"",
  tbl:[["Fraud","<strong>Fraud Act 2006</strong> and <strong>Theft Act 1968</strong>. The Serious Fraud Office has primary responsibility; the FCA checks firms' procedures."],["Money laundering","<strong>Proceeds of Crime Act 2002</strong> is the main legislation, with the <strong>Sanctions and Anti-Money Laundering Act 2018</strong> carrying forward EU requirements post-Brexit."],["Bribery and corruption","<strong>Bribery Act 2010</strong>, in force 1 July 2011. The FCA acts against regulated firms using corrupt methods."]],
  hook:"Fraud 2006 · Proceeds 2002 · Bribery 2010."},
 {t:"check", q:"The main legislation covering money laundering is the:", o:["Fraud Act 2006","Theft Act 1968","Proceeds of Crime Act 2002","Bribery Act 2010"], a:2,
  e:"POCA 2002. SAMLA 2018 sits alongside it, providing for sanctions and money laundering regulations after EU exit."},
 {t:"teach", h:"FATF, and why property is a target", b:"<p>The <strong>Financial Action Task Force</strong> was created in 1989 as an international body dedicated to fighting criminal money, with global membership.</p><p>A laundering method advisers should know: buy property with criminal proceeds — cash, or a relatively small mortgage — then sell it, so the proceeds look clean. That's why lenders and solicitors must identify the <strong>source of funds</strong>.</p>",
  note:{b:"Enforcement is real", x:"In April 2019 the FCA fined Standard Chartered over £102m for AML failures — including an account opened with the equivalent of £500,000 deposited in cash from a suitcase."}},
 {t:"check", q:"Which is NOT a function of the Bank of England?", o:["Banker to the UK government","Issuing banknotes","Maintaining economic stability","Providing personal banking facilities"], a:3,
  e:"The Bank is banker to the government and to the banks — not to the public."}]}
]};

/* FRE1 Topic 2 — The role of government */
const T2 = {n:"Topic 2", t:"Government, tax & the economy", ac:"AC1.3", m:[

{id:"t2a", title:"The economic cycle", sub:"Four phases, four objectives", cards:[
 {t:"teach", h:"Macro and micro", b:"<p><strong>Macroeconomics</strong> is the nation's economy as a whole — measuring performance, identifying the forces driving it, projecting improvement.</p><p><strong>Microeconomics</strong> is a local economy, sector, person or business, focusing on supply, demand and price. Freeports are microeconomics in action: areas with different customs rules and taxes, aimed at regenerating areas and creating jobs.</p>"},
 {t:"teach", h:"The four phases", b:"<p>Activity is measured by <strong>GDP</strong> — the monetary value of all goods and services produced domestically in a period.</p>",
  tbl:[["Recovery and expansion","Interest rates, inflation and unemployment low. Consumers spend, demand and prices rise, share prices improve."],["Boom","To stop overheating, the Bank may raise interest rates to control spending and dampen inflation."],["Contraction or slowdown","Rate rises bite. Spending and demand fall, profits and share prices fall, unemployment rises, inflation slows."],["Recession","At the lowest point the Bank may cut rates to stimulate demand."]],
  note:{b:"The definition that gets tested", x:"A recession is <strong>two consecutive quarters</strong> of negative economic growth as measured by GDP."}},
 {t:"check", q:"In which phase might the Bank of England raise rates to control consumer spending and dampen inflation?", o:["Recovery","Boom","Slowdown","Recession"], a:1,
  e:"Boom is when the economy risks overheating. In recession the Bank moves the other way, cutting to stimulate demand."},
 {t:"teach", h:"Four objectives of economic policy", b:"",
  k:["<strong>Price stability</strong> — low, controlled inflation","<strong>Low unemployment</strong> — 'full' employment is generally where fewer than 3–5% of working-age people are not working","<strong>Balance of payments equilibrium</strong> — neither large deficit nor large surplus","<strong>Economic growth</strong> — rising output, better living standards"],
  note:{b:"Exam trap", x:"'Maximum employment' and 'a large balance of payments surplus' are both wrong. A small amount of unemployment helps avoid inflation and lets workers move jobs; the aim for payments is <em>equilibrium</em>."},
  hook:"PLBG — Prices, Labour, Balance, Growth."},
 {t:"check", q:"Which is NOT a government macroeconomic objective?", o:["Maximum employment levels","Price stability","Balance of payments equilibrium","Economic growth"], a:0,
  e:"The objective is low unemployment, not zero or maximum employment — some slack avoids inflation and helps mobility."}]},

{id:"t2b", title:"Current account & balance of payments", sub:"Visible, invisible, and how to fix a deficit", cards:[
 {t:"teach", h:"What gets recorded", b:"<p>The <strong>current account</strong> records UK trade in goods and services with other countries plus interest receipts and payments. Goods are <strong>visible</strong> trade; services are <strong>invisible</strong> trade. The balance is credits minus debits.</p><p>The <strong>capital account</strong> works the same way but for capital transfers — investment, grants, borrowing.</p><p>The <strong>balance of payments</strong> is the record of one country's trade with the rest of the world, calculated in sterling. Money in is a credit; money out is a debit.</p>",
  hook:"Goods you can see; services you can't."},
 {t:"teach", h:"Three ways to correct a deficit", b:"",
  tbl:[["Raise interest rates","Attracts overseas investment and foreign currency — but makes borrowing dearer, strengthens sterling, makes exports pricier and imports cheaper, which can <em>worsen</em> the deficit."],["Tariffs and quotas","Tariffs are charges on imports; quotas limit quantities. Both make imports less attractive. Known as <strong>protectionism</strong> — against free-market principles."],["Exchange controls","Pegging the domestic currency to another, such as the US dollar, to control how cheap or expensive its goods are."]]},
 {t:"check", q:"A balance of payments deficit can be improved by:", o:["Encouraging imports and discouraging exports","Discouraging imports and encouraging exports","Removing all tariffs immediately","Increasing government spending on imports"], a:1,
  e:"A deficit means more going out than coming in, so you curb imports and push exports. Note the paradox: raising rates to attract investment can strengthen sterling and make the deficit worse."}]},

{id:"t2c", title:"Fiscal policy", sub:"Taxing, spending, borrowing", cards:[
 {t:"teach", h:"The government's other lever", b:"<p><strong>Fiscal (budgetary) policy</strong> influences economic activity through government spending, taxation and borrowing. It's set out in the annual <strong>Budget</strong> by the Chancellor.</p><p>Where spending exceeds income, the government borrows by issuing <strong>gilts</strong> (loans to government with guaranteed income and redemption) and <strong>Treasury bills</strong> (short-term securities issued at a discount to face value). The total borrowing is the <strong>Public Sector Net Cash Requirement (PSNCR)</strong>.</p>",
  hook:"Fiscal = Treasury's wallet. Monetary = Bank's dial."},
 {t:"teach", h:"Expand or contract", b:"",
  tbl:[["Expansionary","Cut taxes and/or increase public spending. People feel better off, demand rises, firms hire, growth follows. Risks: overheating, higher imports and prices, more inflation, more debt to service. Example: 2009 VAT cut and spending increases."],["Contractionary","Increase taxation and reduce public spending during booms. Less cash to spend, so demand, inflation and the current account deficit all fall — perhaps to a budget surplus."]]},
 {t:"check", q:"Cutting VAT and increasing public spending is an example of:", o:["Contractionary fiscal policy","Expansionary fiscal policy","Monetary policy","Quantitative easing"], a:1,
  e:"Taxes down and spending up is expansionary. The risk is that the economy overheats and inflation rises."},
 {t:"teach", h:"Fiscal policy can be targeted", b:"<p>Monetary policy is blunt — it acts on the whole economy. Fiscal policy has macro effects <em>and</em> micro ones: tax incentives can be aimed at a declining manufacturing sector, or grants at firms moving to underdeveloped areas.</p><p>In practice the two are used together, not in isolation.</p>"}]},

{id:"t2d", title:"Income tax and NICs", sub:"Residence, PAYE, and three classes", cards:[
 {t:"teach", h:"Direct vs indirect", b:"",
  tbl:[["Direct","Paid by an individual or business <strong>directly</strong> to government: income tax, NICs, CGT, IHT, corporation tax."],["Indirect","Levied on <strong>spending</strong> or use of a service, paid to HMRC by the provider who builds it into the price: VAT, Air Passenger Duty, stamp duties."]],
  note:{b:"Context", x:"Tax is the Treasury's responsibility, collected by HMRC. Rates and allowances are set in the annual Budget. The tax year runs 6 April to 5 April."}},
 {t:"teach", h:"Residence decides liability", b:"<p>Whether someone pays income tax, CGT and IHT depends on residence status. The main rule: present in the UK for at least <strong>183 days</strong> in a tax year means automatically UK resident. Below that, statutory residence tests apply.</p><p>A UK resident is taxed on <strong>worldwide</strong> income and gains, whether or not brought into the UK. Double taxation agreements stop the same income being fully taxed twice.</p>"},
 {t:"check", q:"Who is most likely to be UK resident for tax purposes?", o:["Someone spending three months a year working in England","Someone on an eight-month contract in Devon starting in May","Someone on a seven-month contract from 6 January","Someone spending 180 days a year in the UK"], a:1,
  e:"An eight-month contract from May falls within one tax year and exceeds 183 days. The January start splits across two tax years; 180 days is just under."},
 {t:"teach", h:"Income tax mechanics", b:"",
  k:["Employers deduct tax on employment income under <strong>PAYE</strong>","Self-employed people report profits and pay under <strong>self-assessment</strong>","The individual reports savings interest, dividends and rent themselves","Everyone has a <strong>personal allowance</strong> — income above it is taxed","Tax is charged on <strong>marginal bands</strong>: one rate on the first band above the allowance, higher rates above"],
  note:{b:"Savings income", x:"A 0% starting rate applies to an initial slice of savings income for those on low incomes, shrinking as non-savings income rises. On top of that is the personal savings allowance — larger for basic-rate than higher-rate taxpayers. Interest is paid gross."}},
 {t:"teach", h:"Three classes of National Insurance", b:"<p>NIC is paid on <strong>earned income only</strong> — never on investment or rental income. Entitlement to many state benefits depends on the NIC record.</p>",
  tbl:[["Class 1","Employees and employers. Employees pay nothing below the primary threshold, a standard rate to the upper earnings limit, a much lower rate above it."],["Class 3","<strong>Voluntary</strong> contributions to fill gaps — most often to protect state pension entitlement."],["Class 4","Self-employed, on profits between the lower and upper profits limits, paid through self-assessment."]],
  note:{b:"Recent change", x:"Mandatory Class 2 NICs were abolished from April 2024. Class 2 survives only as a voluntary payment for those below the small profits threshold."},
  hook:"1 = employed, 3 = volunteer, 4 = self-employed."},
 {t:"check", q:"A self-employed designer pays which class of NIC on her profits?", o:["Class 1","Class 2","Class 3","Class 4"], a:3,
  e:"Class 4, through self-assessment. Class 1 is employment; Class 3 is voluntary top-ups."}]},

{id:"t2e", title:"Capital gains tax", sub:"Disposals, exemptions, reliefs", cards:[
 {t:"teach", h:"What triggers CGT", b:"<p>CGT is payable by UK residents on gains from the <strong>disposal</strong> of certain assets — and disposal means sale, <strong>gifting</strong>, or assignment for money's worth. Giving something away can create a tax bill.</p>",
  note:{b:"On death", x:"CGT is not payable on death, but there is a <em>deemed disposal</em>: personal representatives are treated as acquiring assets at market value at the date of death, setting the base cost for whoever inherits."}},
 {t:"teach", h:"Exempt assets", b:"",
  k:["Main residence — the <strong>principal private residence</strong>","Gilts and most corporate bonds","Motor vehicles kept for normal use","<strong>Chattels</strong> — personal possessions valued below <strong>£6,000</strong>"],
  hook:"Home, gilts, car, small chattels."},
 {t:"check", q:"Which disposal would produce a chargeable gain?", o:["Selling your only home","Selling a holiday cottage at a profit","Selling a gilt at a profit","Selling an antique ring for £5,000"], a:1,
  e:"A second property is fully chargeable. Main residence, gilts and chattels under £6,000 are all exempt."},
 {t:"teach", h:"Losses, timing and reporting", b:"",
  k:["Losses are offset <strong>first</strong> against gains in the same year; residual losses carry <strong>forward</strong>","A loss can never be carried <strong>back</strong> to an earlier year","Acquisition cost plus incidental buying and selling costs reduce the gain; <strong>enhancement</strong> costs count, maintenance and repairs don't","Gains made on or before <strong>31 March 1982</strong> aren't taxable — that date's value becomes the acquisition cost","Normally reported by self-assessment, tax due 31 January after the tax year — <strong>except</strong> residential property, reported and paid within <strong>60 days</strong> of completion"],
  note:{b:"Order of operations", x:"Gain − losses − annual exempt amount = taxable gain. Then add it to income to see which CGT rate applies."}},
 {t:"teach", h:"Four reliefs worth naming", b:"",
  tbl:[["Private residence relief","On the property lived in as main or only residence; with two homes you can nominate which."],["Business asset disposal relief","Formerly entrepreneurs' relief — a lower rate on qualifying business assets."],["Business asset rollover relief","Replace business assets within time limits and CGT is deferred until final disposal."],["Gift hold-over relief","CGT on a gain from gifting certain assets is deferred until the recipient disposes of them."]]}]},

{id:"t2f", title:"Inheritance tax", sub:"Nil-rate bands, PETs and the taper", cards:[
 {t:"teach", h:"The bands", b:"<p>IHT is payable on the estate at death — everything owned less debts and liabilities — and can arise on lifetime gifts to certain trusts.</p>",
  k:["<strong>Nil-rate band £325,000</strong>; 40% above it","<strong>Residence nil-rate band</strong>: the lower of £175,000 or the value of the share of the property — <strong>only</strong> where the property or equivalent value passes to a <strong>lineal descendant</strong>","So an individual leaving a home to children can have £500,000 before IHT","Transfers between <strong>spouses or civil partners</strong> on death are exempt and don't use the nil-rate band","A spouse can inherit the unused bands — potentially £650,000, or £1m with a house"],
  note:{b:"Exam trap", x:"Leaving the house to a nephew or a friend means <strong>no</strong> residence nil-rate band. Lineal descendant means child, grandchild and so on."}},
 {t:"teach", h:"Lifetime gifts", b:"",
  tbl:[["Annual exemption","£3,000 a tax year, immediately out of the estate. Unused exemption carries forward <strong>one</strong> year only."],["PET","A gift to an individual — potentially exempt. Stays in the estate for <strong>seven years</strong>; survive them and it falls out entirely."],["CLT","A gift to most trusts — an immediate charge of <strong>20%</strong> (half the standard rate) on the amount above the nil-rate band."]],
  note:{b:"How it's applied", x:"Gifts are set against the nil-rate band first. Anything left of the band goes against the rest of the estate."}},
 {t:"teach", h:"Taper relief", b:"<p>Taper only reduces the tax on the <strong>excess above the nil-rate band</strong>, over the final four years of the seven:</p>",
  tbl:[["1–3 years","100% of the IHT due"],["3–4 years","80%"],["4–5 years","60%"],["5–6 years","40%"],["6–7 years","20%"],["7+ years","No IHT due"]],
  hook:"After year 3, knock 20 points off each year."},
 {t:"check", q:"A gift of £350,000 (net of exemptions) with no other gifts; death occurs between four and five years later; nil-rate band £325,000 and IHT at 40%. IHT due on the gift?", o:["£5,000","£6,000","£8,000","£10,000"], a:1,
  e:"Only £25,000 exceeds the nil-rate band. £25,000 × 40% = £10,000, then taper at 60% for the 4–5 year band = £6,000."},
 {t:"check", q:"A client leaves their home to their nephew. The residence nil-rate band:", o:["Applies in full","Applies at half rate","Does not apply — a nephew is not a lineal descendant","Applies only if the estate is under £2m"], a:2,
  e:"Lineal descendants only: children, grandchildren and further down the line. Siblings, nieces and nephews don't qualify."}]},

{id:"t2g", title:"Monetary policy", sub:"MPC, QE, M0 and M4", cards:[
 {t:"teach", h:"Nine people, eight meetings", b:"<p>Monetary policy is the actions affecting the <strong>supply and price of money</strong> — nowadays mainly interest rate policy, and the central bank's responsibility.</p><p>The <strong>MPC</strong> has nine members, all with expertise in economics and monetary policy, meeting <strong>eight times a year</strong> to set the <strong>Bank rate</strong> — the rate that determines all other rates in the system.</p>",
  note:{b:"The letter", x:"Target is 2% on CPI. If inflation is more than 1 percentage point above or below target, the Governor must write to the Chancellor explaining why and what will be done."},
  hook:"9 members, 8 meetings, 2% target, 1% tolerance."},
 {t:"check", q:"Inflation reaches 3.4% on CPI. What follows?", o:["Nothing — it's within tolerance","The Governor writes to the Chancellor","QE begins automatically","The MPC must meet within 48 hours"], a:1,
  e:"Tolerance runs 1% to 3%. At 3.4% the Governor owes the Chancellor a letter explaining the miss and the plan."},
 {t:"teach", h:"Which way the lever moves", b:"",
  tbl:[["Inflation too high","Raise the Bank rate → banks raise theirs → borrowing dearer, savers rewarded → borrowing falls, saving rises → spending cools."],["Inflation too low","Cut the Bank rate → borrowing cheaper, savings returns poorer → spending increases."]],
  note:{b:"It's slow", x:"A change in the Bank rate can take up to 18 months to affect inflation — which is why it's described as a crude tool."}},
 {t:"teach", h:"QE in three effects", b:"<p>The Bank buys assets — usually gilts — from banks, insurers and pension funds, creating new money electronically to pay for them.</p>",
  k:["Buying pushes <strong>bond prices up</strong> and so <strong>yields down</strong>; investors switch to shares and corporate bonds, pushing those prices up and yields down too. Lower rates across the board, plus a 'feel-good' effect for existing holders","Buying corporate bonds improves capital market conditions, so firms can raise money more easily","The new money lands in institutions' accounts, giving them more to lend"],
  note:{b:"The downside", x:"QE can produce more inflation than planned, raising living costs; low rates hurt savers who rely on interest for income."}},
 {t:"check", q:"The immediate effect of QE on gilt prices and yields is:", o:["Prices down, yields up","Prices up, yields down","Both up","Both down"], a:1,
  e:"A large buyer bids prices up, and yield moves inversely to price. Every other QE effect flows from that."},
 {t:"teach", h:"M0 and M4", b:"",
  tbl:[["M0 — narrow money","The cash base: notes and coins in circulation plus banks' operational balances at the Bank of England. <strong>99% is notes and coins.</strong>"],["M4 — broad money","Bank and building society deposits, plus new money created by loans and overdrafts."]],
  note:{b:"Why it matters", x:"If the money supply exceeds the real value of goods and services, inflation happens. The Bank watches M4 lending and can manipulate rates to control new credit."},
  hook:"0 = the cash you can hold. 4 = the credit you can't."}]},

{id:"t2h", title:"Inflation and interest rates", sub:"Four indices, three cousins", cards:[
 {t:"teach", h:"The four indices", b:"",
  tbl:[["CPI","A basket reflecting average household spending. The <strong>official</strong> measure for inflation targets and for uprating state benefits. <strong>Excludes</strong> mortgage and housing costs."],["RPI","Similar, but different goods and weightings, and it <strong>includes</strong> mortgage and housing costs. No longer official, still widely used."],["RPIX","The RPI <strong>excluding</strong> mortgage interest payments."],["AWE","Average Weekly Earnings — short-term earnings growth. Usually rises faster than RPI, though not in times of very high inflation."]],
  hook:"CPI has no roof. RPI has a mortgage."},
 {t:"check", q:"Which index includes mortgage interest and housing costs?", o:["CPI","CPIH","RPI","RPIX"], a:2,
  e:"RPI includes them; RPIX is RPI minus mortgage interest; CPI, the target measure, excludes housing costs."},
 {t:"teach", h:"Three words that get confused", b:"",
  tbl:[["Disinflation","A fall in the <em>rate</em> of inflation — prices still rising, just more slowly. 4% down to 3%."],["Deflation","A general <em>fall</em> in prices — a negative rate below 0%."],["Stagflation","Slow growth, high unemployment <em>and</em> inflation together."]],
  note:{b:"Why not zero?", x:"A moderate rate, perhaps 2–3%, is seen as healthy. Zero inflation would not be good for an economy."}},
 {t:"check", q:"Inflation falls from 4% to 3%. This is:", o:["Deflation","Disinflation","Stagflation","Negative growth"], a:1,
  e:"Prices are still rising, just more slowly. Deflation would mean prices actually falling."},
 {t:"teach", h:"Nominal vs real", b:"<p><strong>Nominal</strong> is the rate actually paid — 5% means £5 a year per £100.</p><p><strong>Real</strong> adjusts for inflation. Approximate it by subtracting: 5% nominal less 3% inflation is roughly a 2% real return.</p>",
  note:{b:"Recent history", x:"UK inflation was in double figures for seven months from September 2022, peaking at 11.1% in October 2022. The Bank rate rose from a record low of 0.1% to 5.25% by July 2023, and was first cut in August 2024."}}]},

{id:"t2i", title:"Brexit, equivalence & global bodies", sub:"Where the rules now come from", cards:[
 {t:"teach", h:"Four tiers of UK regulation", b:"",
  k:["<strong>Acts of Parliament</strong>, with detail delivered by statutory instruments","<strong>Regulatory bodies</strong> — the PRA and FPC (both part of the Bank of England) and the FCA","<strong>Firms' own policies</strong> and internal compliance departments","<strong>Arbitration schemes</strong> for complaints — mainly the Financial Ombudsman Service"],
  hook:"Law → regulator → firm → ombudsman."},
 {t:"teach", h:"EU law, and how it was kept", b:"",
  tbl:[["Regulations","Acts of the EU parliament — implemented <strong>directly</strong> into member states' law."],["Directives","Set an <strong>objective</strong> member states must achieve; each state decides how through its own legislation."]],
  note:{b:"Onshoring", x:"The European Union (Withdrawal) Act 2018, as amended in 2020, retained EU law as it stood. The PRA and FCA were delegated powers to correct 'deficiencies' — that process is called onshoring."}},
 {t:"teach", h:"Passporting, then equivalence", b:"<p><strong>Passporting</strong> let a firm authorised in one EU state operate across the EU without separate authorisation. It ended with EU exit.</p><p><strong>Equivalence</strong> is where one country's authorities allow another's firms access, on agreement that regulatory standards are broadly equivalent. It doesn't cover core banking, deposit-taking or retail investments — so it is <strong>not</strong> as good as passporting.</p><p>A UK–EU Memorandum of Understanding was signed in June 2023, creating a Joint EU-UK Financial Regulatory Forum for voluntary regulatory co-operation.</p>"},
 {t:"check", q:"Compared with passporting, equivalence:", o:["Gives wider access to EU markets","Gives narrower access — it excludes core banking, deposits and retail investments","Is identical in effect","Applies only to insurance"], a:1,
  e:"Equivalence is partial. Its exclusions are exactly why UK firms had to seek local authorisation after EU exit."},
 {t:"teach", h:"The Financial Services and Markets Act 2023", b:"<p>Came from the Treasury's <strong>Future Regulatory Framework Review</strong>, Royal Assent June 2023. It repeals and replaces retained EU law with UK-specific rules, and:</p>",
  k:["Gives the FCA and PRA a <strong>secondary objective</strong> to facilitate the UK's international competitiveness and growth in the medium to long term","Strengthens enforcement powers","Enhances disclosure and consumer protection","Introduces a <strong>designated activities regime</strong> for activities posing risk of harm","Encourages fintech and digital transformation"]},
 {t:"teach", h:"Six global bodies", b:"",
  tbl:[["FSB","Financial Stability Board — co-ordinates national authorities and standard-setters to promote international financial stability."],["IOSCO","Develops and promotes international standards for <strong>securities</strong> regulation; works with the G20 and FSB."],["IAIS","International Association of Insurance Supervisors — the global standard-setter for <strong>insurance</strong> supervision."],["FATF","The global money laundering and terrorist financing watchdog."],["OECD","Develops international standards across social, economic and environmental issues."],["IMF","190 members; financial stability, monetary co-operation, trade, employment, reducing poverty."]],
  hook:"Securities = IOSCO. Insurance = IAIS. Laundering = FATF."}]}
]};

/* FRE1 Topic 3 — State benefits; Topic 4 — Meeting customer needs */
const T3 = {n:"Topic 3", t:"State benefits & the safety net", ac:"AC1.3", m:[

{id:"t3a", title:"Universal Credit", sub:"Six benefits, one payment", cards:[
 {t:"teach", h:"A safety net, not a lifestyle", b:"<p>The main purpose of state benefits is to act as a <strong>safety net in times of need</strong>, not to support a comfortable standard of living.</p><p>They affect financial planning two ways: they provide a base that reduces the private provision needed, and — because some are means-tested — a plan that raises income or assets can quietly reduce entitlement, making it less attractive than it looked.</p>"},
 {t:"teach", h:"The six legacy benefits UC replaced", b:"<p>Universal Credit is <strong>means-tested</strong>, for working-age people on low incomes, and is not dependent on work status. Introduced in 2013, it replaced, for new claims:</p>",
  k:["Income Support","Income-based Jobseeker's Allowance","Income-related Employment and Support Allowance","Working Tax Credit","Child Tax Credit","Housing Benefit"],
  hook:"Two income-based, two tax credits, one support, one housing."},
 {t:"teach", h:"How the award works", b:"",
  k:["Unemployed claimants must <strong>commit to look for work</strong>, or face reduction or withdrawal. Carers, single parents with a child under one, and those with limited capability for work are exempt","A basic allowance, with different rates for singles and couples and a lower rate for younger people","Extra amounts for disability, caring, housing costs, children and childcare","An <strong>earnings disregard</strong> ignores income from work up to a level based on circumstances; as earnings rise, entitlement falls","A <strong>benefit cap</strong> applies from 16 to state pension age, limiting total benefits to roughly the average UK wage"]},
 {t:"check", q:"Which was NOT one of the six benefits replaced by Universal Credit?", o:["Housing Benefit","Child Tax Credit","Personal Independence Payment","Income Support"], a:2,
  e:"PIP sits outside UC — it isn't means-tested and doesn't depend on NICs, so it never fitted the UC model."}]},

{id:"t3b", title:"Benefits outside Universal Credit", sub:"Eight that kept their own rules", cards:[
 {t:"teach", h:"The list", b:"<p>These stay outside UC, though payments from some may reduce a UC award:</p>",
  k:["Carer's Allowance","New style Jobseeker's Allowance and new style Employment and Support Allowance","Personal Independence Payment","Child Benefit","Statutory Sick Pay","Statutory Maternity Pay","Maternity Allowance","Attendance Allowance"]},
 {t:"teach", h:"Contribution-based, taxable, time-limited", b:"",
  tbl:[["New style JSA","Requires sufficient <strong>Class 1</strong> NICs. Maximum <strong>six months</strong>. Paid gross but <strong>taxable</strong>. Claimants are usually credited with NICs each week."],["New style ESA","For those under SPA, self-employed or unemployed, whose illness or disability prevents work. Requires sufficient NICs, <strong>taxable</strong>, <strong>not means-tested</strong>. Also available when SSP ends. A work capability assessment applies."],["Statutory Sick Pay","Paid by the <strong>employer</strong> after <strong>four days or longer</strong> off sick, if average weekly earnings are above the Class 1 NIC level. Liable to income tax and Class 1 NICs."]],
  note:{b:"The distinction that gets tested", x:"New style ESA is not means-tested; income-related ESA was. That's why one moved into UC and the other didn't."}},
 {t:"check", q:"Which form of Employment and Support Allowance is means-tested?", o:["New style ESA only","Income-related ESA only","Both","Neither"], a:1,
  e:"Income-related ESA was means-tested and became part of UC. New style ESA is contribution-based."},
 {t:"teach", h:"Disability and caring", b:"",
  tbl:[["PIP","Tax-free, <strong>not</strong> means-tested, <strong>not</strong> NIC-dependent. Claim must begin before age 65 but can continue beyond. Two elements: <strong>care</strong> (washing, dressing, cooking) and <strong>mobility</strong>."],["Attendance Allowance","For those who have <strong>reached state pension age</strong> and need help with personal care. Tax-free, not means-tested, not NIC-dependent. Lower rate for day <em>or</em> night; higher rate for day <em>and</em> night."],["Carer's Allowance","<strong>Taxable</strong>. Caring at least <strong>35 hours a week</strong>, carer aged 16+, not in full-time education or studying over 21 hours, earning under a limit. Only available if the person cared for receives certain disability benefits."]],
  hook:"Under 65 → PIP. Over SPA → Attendance Allowance."},
 {t:"check", q:"A 70-year-old needs help with personal care both day and night. Which benefit, and at which rate?", o:["PIP, mobility element","Attendance Allowance, higher rate","New style ESA","Carer's Allowance"], a:1,
  e:"Attendance Allowance is the over-SPA benefit; the higher rate is for help needed both day and night."},
 {t:"teach", h:"Maternity, and the mortgage loan", b:"",
  tbl:[["Statutory Maternity Pay","From the <strong>employer</strong>. Needs 26 weeks' continuous employment before the qualifying week (the 15th week before the due week) and earnings above a threshold. Maximum <strong>39 weeks</strong>, starting up to 11 weeks before the due date."],["Maternity Allowance","From the <strong>DWP</strong>, for those who can't claim SMP — self-employed, recently changed jobs or stopped working. Not taxed, no NICs. Also up to 39 weeks."],["Support for Mortgage Interest","<strong>Not strictly a benefit — a loan.</strong> A second charge, repaid with interest when the property is sold or ownership transfers. Covers interest only, never capital. Paid direct to the lender at a standard rate that may differ from the actual mortgage rate."]],
  note:{b:"Eligibility for SMI", x:"Claimant must be receiving Universal Credit or Pension Credit (or a legacy income-related benefit)."}},
 {t:"check", q:"Support for Mortgage Interest is best described to a client as:", o:["A grant covering capital and interest","A tax-free gift from the DWP","A loan secured by a second charge, covering interest only","An insurance policy against redundancy"], a:2,
  e:"It's repayable on sale or transfer of ownership, and it never touches the capital element."},
 {t:"teach", h:"Child Benefit and the high income charge", b:"<p>Tax-free, for a child under 16 — continuing to 19 in full-time education or approved training. Doesn't depend on NICs and isn't affected by other benefits. Higher rate for the eldest child, lower for the others.</p><p>The <strong>High Income Child Benefit Charge</strong> applies where either partner's <strong>adjusted net income</strong> exceeds the threshold; if both exceed it, it's assessed on the higher. The charge is <strong>1% of the Child Benefit for each £200</strong> over the threshold — so it cancels the benefit entirely once income is £20,000 above it.</p>",
  note:{b:"The anomaly", x:"Two earners £1 below the threshold each pay nothing. One earner just above it pays the charge. A gross pension contribution reduces adjusted net income — and can wipe the charge out."}},
 {t:"check", q:"John earns £58,000, Jane earns £67,000, and the threshold is £60,000. They will:", o:["Lose eligibility for Child Benefit entirely","Pay no charge, since one income is below the threshold","Be liable to a tax charge, since one income is over the threshold","Receive increased Child Benefit"], a:2,
  e:"The charge bites if <em>either</em> partner is over, assessed on the higher earner. Eligibility isn't lost — the benefit is clawed back through tax."}]},

{id:"t3c", title:"Retirement benefits", sub:"35 years, three locks", cards:[
 {t:"teach", h:"How state pensions work", b:"<p>Introduced in 1908 and run on a <strong>pay-as-you-go</strong> basis: today's workers' tax and NICs pay today's pensioners. State pension age is reviewed regularly against life expectancy.</p><p>The basic state pension is set at little more than a <strong>quarter of national average earnings</strong> — a basic standard of living, nothing more.</p>"},
 {t:"teach", h:"Before and after 6 April 2016", b:"",
  tbl:[["Reaching SPA before 6/4/2016","Basic state pension, maximum on <strong>30 years'</strong> NICs. Employees could top up through additional state pensions: the graduated scheme (1961–1973), <strong>SERPS</strong> (from 1978), and <strong>S2P</strong> (from 2002, less generous). Never available to the self-employed. Contracting out ended in 2012 for individuals and 2016 for schemes. A 'Category B' pension could be based on a spouse's entitlement."],["Reaching SPA from 6/4/2016","The <strong>new state pension</strong>: a single flat-rate benefit from your own NIC record. <strong>35 years</strong> for the maximum, <strong>10 years</strong> to qualify for anything. Carers are credited. <strong>No element based on a spouse's entitlement.</strong>"]],
  hook:"Old: 30 years and a spouse. New: 35 years, on your own."},
 {t:"check", q:"A major difference between the basic and new state pension is that the new pension:", o:["Is paid at a later age","Requires lower NICs for a full pension","Has no facility to claim on a spouse's entitlement","Includes an earnings-related element"], a:2,
  e:"The new pension is individual — 35 years of your own NICs, no spousal claim, no earnings-related top-up."},
 {t:"teach", h:"The triple lock", b:"<p>Once in payment, both the basic and new state pension increase each year by the <strong>higher of</strong>:</p>",
  k:["Earnings — the Average Weekly Earnings index","Inflation — CPI","<strong>2.5%</strong>"],
  note:{b:"The debate", x:"Governments have seen the triple lock as a costly burden; arguments centre on cost and intergenerational fairness."},
  hook:"Earnings, prices, or 2.5% — pick the biggest."},
 {t:"teach", h:"Pension Credit", b:"<p>A <strong>means-tested</strong> top-up for those over SPA with income below a certain level, and <strong>not taxable</strong>. Two elements:</p>",
  tbl:[["Guarantee Credit","Tops weekly income up to a specified minimum."],["Savings Credit","An extra payment for some who reached SPA <strong>before 6 April 2016</strong> and saved towards retirement."]]},
 {t:"check", q:"The triple lock guarantees an annual increase equal to:", o:["CPI only","The higher of earnings, CPI or 2.5%","The lower of earnings or CPI","RPI plus 1%"], a:1,
  e:"Higher of the three. Note it's AWE for earnings and CPI for prices — not RPI."}]}
]};

const T4 = {n:"Topic 4", t:"Customers, needs & products", ac:"AC2.1, AC2.2", m:[

{id:"t4a", title:"The financial life cycle", sub:"Seven stages, one hierarchy", cards:[
 {t:"teach", h:"Three broad categories of customer", b:"<p>Personal customers, business customers, and those who act on behalf of others.</p><p><strong>Trustees</strong> are the third group: they look after assets held in trust, owe a duty of care to beneficiaries, and must act within the trust deed. Their needs are practical — trustee bank account, investment account, deposit account, occasional borrowing.</p>"},
 {t:"teach", h:"The seven stages", b:"",
  tbl:[["Children","Few real needs; savings accounts opened by relatives."],["Students (16–21)","Bank account, maybe savings; some borrowing for a car or to top up student loans."],["Young adults (21–30)","More spending power, little saved. Renting stretches finances; limited capacity for insurance."],["Young families (30–40)","First home and deposit-building, then children. Income may drop; <strong>protection becomes crucial</strong> — including for the non-earner, whose care would have to be paid for."],["Established families (40–50)","Better off but expenses peak — mortgage, school or university fees. Protection, retirement funding, building capital."],["Mature households (50–60)","Highest earning potential, outgoings falling. The biggest <strong>inheritors</strong>. IHT planning starts; retirement planning is the priority."],["Retirement (60+)","The switch from building capital to <strong>producing income from capital</strong>. Often 'asset rich, income poor'. Long-term care and IHT."]],
  hook:"Build it, protect it, grow it, spend it."},
 {t:"check", q:"Which group is most likely to be 'asset rich, income poor'?", o:["Young professionals","Established families","Mature households","Retirees"], a:3,
  e:"Retirees may own property but lack income — hence trading down or equity release."},
 {t:"teach", h:"The hierarchy of financial needs", b:"<p>Needs should be addressed <strong>in order</strong>. There is no point putting money away for the future if the family can't survive the loss of the main earner today.</p><p>Beyond the hierarchy sit three further advice areas: <strong>tax planning</strong>, <strong>estate planning</strong> and <strong>succession planning</strong>.</p>",
  note:{b:"How to use it in an answer", x:"Name the stage, name the priority need, then justify the order. 'Investment before protection' is the classic wrong recommendation."}},
 {t:"check", q:"A couple with two young children, a mortgage and no cover ask about a stocks and shares ISA. The correct first step is:", o:["Open the ISA — it's what they asked for","Address protection first, then revisit investing","Refuse to advise them","Recommend a buy-to-let instead"], a:1,
  e:"The hierarchy puts survival and security below growth. Investing before protection is very hard to defend as a good outcome."}]},

{id:"t4b", title:"Business customers & obligations", sub:"Structures, and the 12 Principles", cards:[
 {t:"teach", h:"Three business forms, three protection needs", b:"",
  tbl:[["Sole trader","Business and personal needs blur. Banking, loans and mortgages, life assurance to protect business loans, insurance for premises and stock, pensions for employees."],["Partnership","Two or more self-employed people working together formally. <strong>Partnership protection</strong>: life assurance taken out by each partner <strong>in trust for the others</strong>, so survivors can buy out the deceased's share rather than inherit the beneficiaries as partners."],["Limited company","Banking, loans, <strong>director and shareholder protection</strong>, staff benefits such as pensions and life assurance, general insurance."]],
  hook:"Partners insure each other. Directors do the same, by another name."},
 {t:"check", q:"A partner dies. The beneficiaries want their share; the surviving partners have no cash and don't want them as partners. The solution is:", o:["A joint life first death policy owned by the firm","Partnership protection — life assurance in trust for the other partners","A key person policy on the firm's accountant","A discretionary trust set up after death"], a:1,
  e:"Each partner insures in trust for the others, so the survivors receive the lump sum and can buy out the share."},
 {t:"teach", h:"What the industry owes customers", b:"<p>The regulator can't write a rule for every situation, so it takes a <strong>principles-based</strong> approach stressing outcomes over processes.</p><p>The requirements are summarised in the FCA's <strong>12 Principles for Businesses</strong> and the <strong>Consumer Duty</strong>: firms must act to deliver good outcomes for retail clients.</p>",
  note:{b:"Count carefully", x:"The text says <strong>12</strong> Principles — Principle 12 is the Consumer Duty itself, added to the original 11."}},
 {t:"teach", h:"Consumer Duty: three rules, four outcomes", b:"",
  tbl:[["Cross-cutting rules","Act in good faith · Avoid foreseeable harm · Enable and support customers to pursue their financial objectives"],["Outcomes","Products and services · Price and value · Consumer understanding (communications) · Consumer support (customer service)"]],
  hook:"3 rules to follow, 4 outcomes to prove."},
 {t:"check", q:"'Avoid foreseeable harm' is:", o:["One of the four outcomes","One of the three cross-cutting rules","A threshold condition","A principle of regulation"], a:1,
  e:"Keep the lists apart: three cross-cutting rules, four outcomes. Mixing them up is the most common slip on this topic."},
 {t:"teach", h:"Why confidence is low", b:"<p>In 2023 the FCA found only <strong>41%</strong> of people were confident in the industry and just <strong>36%</strong> felt firms treated them honestly and transparently — with younger groups more negative.</p><p>The 2022 Financial Lives survey found <strong>24%</strong> of UK adults had low financial resilience, <strong>45%</strong> found it hard to keep up with bills, and <strong>47%</strong> showed one or more characteristics of vulnerability.</p>",
  note:{b:"Asymmetry of information", x:"The imbalance between what firms know and what customers know can drive poor outcomes. That gap is the reason behind Treating Customers Fairly (2010) and the Consumer Duty (in force since July 2023, and covering closed products from July 2024)."}},
 {t:"teach", h:"MaPS and MoneyHelper", b:"<p>The <strong>Financial Guidance and Claims Act 2018</strong> created the <strong>Money and Pensions Service</strong>, giving free guidance on pensions, money and debt. It rebranded as <strong>MoneyHelper</strong> in 2021 and works with government and the FCA on financial capability and education.</p>"}]},

{id:"t4c", title:"Protecting against death", sub:"Insurable interest and four arrangements", cards:[
 {t:"teach", h:"Insurable interest", b:"<p>You may only insure a life where you would suffer <strong>directly and financially</strong> from the death or event. The principle comes from the <strong>Life Assurance Act 1774</strong>, known as the Gambling Act — before it, people could insure strangers' lives, which gave some an incentive to make the policy pay out.</p>",
  tbl:[["Own life","<strong>Unlimited</strong> — no legal cap, though insurers set their own."],["Spouse / civil partner","<strong>Unlimited</strong> in each other."],["Parents and children","<strong>No</strong> insurable interest in each other's lives."],["Creditor","Up to the level of the debt."],["Employer","Up to the value of the employee's services."],["Business partners","Up to the sum needed to buy the deceased's share."]],
  note:{b:"Exam trap", x:"Parent and child is the one people assume works. It doesn't."}},
 {t:"check", q:"Which pair has NO insurable interest in each other's lives?", o:["Spouses","Business partners","A parent and their adult child","A creditor and a debtor"], a:2,
  e:"Parents and children have no insurable interest in each other. Everything else on the list is limited to a financial amount, except spouses and your own life, which are unlimited."},
 {t:"teach", h:"Four ways to arrange cover", b:"",
  tbl:[["Single life, own benefit","One life, owned by the insured; benefits go into their estate."],["Life of another","One life, but owned by someone else with insurable interest, who receives the benefit."],["Joint life first death","Pays on the <strong>first</strong> death, then stops — the survivor has no cover. Used for family protection and mortgages."],["Joint life second death","Pays only on the <strong>second</strong> death. Used <strong>exclusively for IHT planning</strong>, because that's when the liability arises."]],
  hook:"First death protects. Second death pays the taxman."},
 {t:"check", q:"Which life cover arrangement is used exclusively for inheritance tax planning?", o:["Joint life first death","Life of another","Joint life second death","Single life"], a:2,
  e:"The IHT bill lands on the second death when assets leave the couple — so the cover must pay out then."},
 {t:"teach", h:"Term vs whole of life", b:"",
  tbl:[["Term insurance","<strong>Cheapest</strong> form of life cover. Pays on death <strong>during the term only</strong>. No cash value, no investment element. <strong>Level term</strong> for fixed debts like interest-only mortgages. <strong>Decreasing term</strong> reduces annually and costs less — as mortgage protection tracking a repayment mortgage, or <strong>family income benefit</strong> paying a guaranteed tax-free income from death to the end of the term."],["Whole-of-life assurance","Runs for life, no term. Pays out <strong>when</strong>, not if. Usually includes investment — with-profits or unit-linked — and may have a surrender value, small in early years. Used for legacies, death expenses and funding IHT. Too expensive for debt protection, which has a defined term."]],
  note:{b:"Assurance vs insurance", x:"Insurance covers something that <em>might</em> happen. Assurance covers something <em>certain</em> to happen — which is why whole-of-life is 'assurance' and term is 'insurance'."}},
 {t:"check", q:"A client wants the cheapest way to secure their family's income until the youngest child turns 21. The best fit is:", o:["Whole-of-life assurance","Level term assurance","Family income benefit","A joint life second death policy"], a:2,
  e:"FIB pays an income from the date of death to the end of the term, and the total falls each year the insured survives — the most cost-effective option for a defined period."}]}
]};

/* FRE1 Topic 5 — legal principles; Topic 6 — wills, intestacy, trusts */
const T5 = {n:"Topic 5", t:"Legal principles", ac:"AC3.1", m:[

{id:"t5a", title:"Legal persons", sub:"Who can sign, who can be sued", cards:[
 {t:"teach", h:"What a legal person is", b:"<p>Those with a <strong>separate legal existence</strong> who can enter contracts or be sued: natural persons, companies limited by shares or guarantee, partnerships, LLPs, and personal representatives.</p>",
  tbl:[["Sole trader","No separate legal identity from the owner — <strong>unlimited personal liability</strong> for business debts."],["Limited company","A separate legal person. Members' liability limited to their shareholding or guarantee."],["Partnership","Two or more people in business together; partners are <strong>jointly and severally liable</strong>."],["LLP","Combines partnership flexibility with limited liability — a body corporate in its own right."],["Personal representatives","Executors (appointed by will) or administrators (on intestacy), acting for the estate."]],
  hook:"Sole trader = you. Company = it."},
 {t:"check", q:"Which structure gives its owner unlimited personal liability for business debts?", o:["Limited company","Limited liability partnership","Sole trader","Company limited by guarantee"], a:2,
  e:"A sole trader has no separate legal identity. The other three all separate the business from the individual."}]},

{id:"t5b", title:"Powers of attorney", sub:"Ordinary, enduring, lasting", cards:[
 {t:"teach", h:"Donor and attorney", b:"<p>The person who <em>makes</em> the power is the <strong>donor</strong>; the person who acts is the <strong>donee</strong> or attorney.</p><p>Both must be 18 or over with mental capacity; the attorney must also not be bankrupt.</p>"},
 {t:"teach", h:"Ordinary power of attorney", b:"<p>Lets the attorney act <strong>while the donor still has mental capacity</strong> — signing documents, handling financial affairs, making purchases, disposing of property including 'usual' gifts.</p><p>Actions must be what the donor would reasonably be expected to do, in their interest. Gifts must be reasonable in size and reflect past behaviour. <strong>The attorney cannot use the powers for their own benefit.</strong></p>",
  note:{b:"How it ends", x:"Automatically on the donor's death, bankruptcy, expiry of any time limit — and crucially, on the donor's <strong>loss of mental capacity</strong>, exactly when help is most needed. That gap is why EPAs and then LPAs exist."}},
 {t:"teach", h:"EPA then LPA", b:"",
  tbl:[["Enduring PoA","Could be set up until <strong>30 September 2007</strong>. Continues after loss of capacity, covering property and affairs. Must be registered with the <strong>OPG</strong> once the donor becomes incapable. On registration the donor and at least <strong>three relatives</strong> must be told, in a set order of priority, so they can object. Old EPAs remain valid and registrable."],["Lasting PoA","From <strong>1 October 2007</strong> under the <strong>Mental Capacity Act 2005</strong>. The donor may name up to <strong>five people</strong> to be told of a registration application. <strong>An LPA only comes into operation when registered with the OPG.</strong>"]],
  hook:"EPA: 3 relatives must be told. LPA: up to 5 people you choose."},
 {t:"teach", h:"The two LPAs", b:"",
  tbl:[["Property and affairs LPA","Registrable at any time; once registered, <strong>both donor and attorney</strong> can make decisions — unless the document says it can't be used until capacity is lost."],["Personal welfare LPA","Registrable at any time, but the attorney can only act <strong>once the donor has lost mental capacity</strong>. From that point the donor cannot decide for themselves."]],
  note:{b:"Who's who", x:"The <strong>Office of the Public Guardian</strong> registers powers of attorney. The <strong>Court of Protection</strong> decides whether someone lacks capacity and can appoint deputies."}},
 {t:"check", q:"Which statement about powers of attorney is true?", o:["It is still possible to register an EPA set up before October 2007","An LPA can only cover the donor's finances","All PoAs let the attorney act as soon as they are registered","An ordinary PoA cannot be revoked"], a:0,
  e:"Pre-October 2007 EPAs remain valid and can still be registered. LPAs come in two forms, the welfare one only bites on incapacity, and any PoA can be revoked while the donor has capacity."}]},

{id:"t5c", title:"Contract and agency", sub:"What makes a deal binding", cards:[
 {t:"teach", h:"The essentials", b:"",
  k:["<strong>Offer and acceptance</strong> — an offer by the offeror and an <em>unqualified</em> acceptance","<strong>Consideration</strong> — something of value passing each way; a promise to pay is valid consideration","<strong>Intention</strong> to create legal relations","<strong>Capacity</strong> — the parties must be legally able to contract","<strong>Legality</strong> of purpose"],
  note:{b:"When writing is compulsory", x:"Verbal contracts can be valid, but not for property purchase, tenancy agreements or consumer credit — and any contract including a <strong>guarantee</strong> must be in writing."},
  hook:"Offer, Acceptance, Consideration — the three that always appear."},
 {t:"check", q:"Offer, acceptance and intention to create legal relations, plus:", o:["A witness","Consideration","Registration","Written form"], a:1,
  e:"Consideration — value moving both ways. Most contracts need no writing at all; land, tenancies, consumer credit and guarantees are the exceptions."},
 {t:"teach", h:"Agency", b:"<p>An <strong>agent</strong> acts on behalf of a <strong>principal</strong>, creating a contract between the principal and a third party. The agent owes duties to act with due care, follow instructions, avoid conflicts and account for money received.</p><p>It matters in financial services because an adviser may be the agent of the client, or of the provider — and who they represent decides who bears the consequences of their acts.</p>"}]},

{id:"t5d", title:"Property ownership", sub:"Realty, personalty and survivorship", cards:[
 {t:"teach", h:"Two categories of property", b:"",
  tbl:[["Real property (realty)","Fixed or immovable — land and buildings. Successful action restores the <strong>physical property</strong>."],["Personal property (personalty / chattels)","Movable assets, including animals. Successful action usually brings <strong>compensation</strong>, since the item may have been sold or destroyed."]],
  note:{b:"Word origin worth remembering", x:"'Chattel' comes from 'cattle' — in ancient times a good measure of wealth."}},
 {t:"teach", h:"Three ways to own", b:"",
  tbl:[["Single ownership","One person, entitled to the asset and any benefit from it."],["Joint tenancy","In law, joint legal owners are treated as <strong>one single owner</strong> with no defined shares. On death, legal title passes automatically to the survivor — <strong>regardless of any will or the laws of intestacy</strong>."],["Tenancy in common","Distinct, defined shares. The share passes under the will or intestacy, not to the co-owner."]],
  hook:"Joint tenancy beats the will. Tenancy in common obeys it."},
 {t:"check", q:"A client wants their 50% share to pass to their child while their spouse lives in the property for life. The right structure is:", o:["Joint tenancy plus a letter of wishes","Tenancy in common, with a life interest trust","Joint tenancy, relying on the will","Sole ownership with a licence to occupy"], a:1,
  e:"Only tenancy in common lets the share pass under the will. The life interest trust then houses the spouse without giving them the capital."},
 {t:"teach", h:"Legal vs equitable ownership", b:"",
  tbl:[["Legal owner","Whoever is registered as owner. Has the power to transfer or mortgage the land."],["Equitable (beneficial) owner","Has an economic interest — an entitlement to a share of the value — but <strong>cannot transfer legal title</strong>."]],
  note:{b:"The four-name limit", x:"Up to <strong>four</strong> people can be registered as joint legal owners at the Land Registry. If more own it, four are registered and the rest are beneficial owners only. Registration became compulsory in 1990 on sale, transfer or a new mortgage; voluntary registration has been possible since 1925."}}]},

{id:"t5e", title:"Insolvency and bankruptcy", sub:"Four routes out of debt", cards:[
 {t:"teach", h:"Insolvent vs bankrupt", b:"<p><strong>Insolvency</strong>: liabilities exceed assets, or obligations can't be met within a reasonable time of falling due. Often <strong>temporary</strong>.</p><p><strong>Bankruptcy</strong>: insolvent with <strong>no prospect</strong> of meeting liabilities. The term used in England, Wales and Northern Ireland; Scotland calls it <strong>sequestration</strong>, administered by the Accountant in Bankruptcy. Main law: <strong>Insolvency Act 1986</strong>.</p>",
  note:{b:"Thresholds", x:"No minimum debt to petition for your <em>own</em> bankruptcy. A creditor must be owed <strong>£5,000</strong> to petition against someone else. Applications moved online and out of the courts from 6 April 2016."}},
 {t:"teach", h:"Bankruptcy in practice", b:"<p>The <strong>Enterprise Act 2002</strong> set a standard discharge period of <strong>12 months</strong>, though a repeat bankrupt may face longer, and the court can suspend discharge if terms aren't kept. Repayments can last up to three years.</p><p>Possessions pass to an official receiver or insolvency practitioner — the <strong>trustee in bankruptcy</strong> — who sells them to pay creditors. Exceptions: clothing, household items, and tools needed to keep working.</p>",
  hook:"12 months to discharge. £5,000 for a creditor to start it."},
 {t:"check", q:"The standard bankruptcy discharge period is:", o:["6 months","12 months","3 years","6 years"], a:1,
  e:"Twelve months since the Enterprise Act 2002, though the court can extend or suspend it where terms are breached."},
 {t:"teach", h:"The alternatives", b:"",
  tbl:[["IVA","Reschedules repayment of part of the debts, typically over <strong>five to six years</strong>, supervised by an insolvency practitioner. Needs creditors owed at least <strong>75% of the value of debt represented at the meeting</strong> — so one large creditor can push it through against smaller ones. Stays on the credit record for <strong>six years</strong>."],["DRO","England and Wales, for those with no assets and no prospect of improvement. Debts under <strong>£50,000</strong>, gross assets no more than <strong>£2,000</strong> (one vehicle under £4,000 excluded), disposable income no more than <strong>£75 a month</strong>, no DRO in the previous six years. A <strong>12-month moratorium</strong>, then the debts are written off. Applied for only through an approved intermediary."],["CVA","The company equivalent of an IVA, for a firm or LLP in temporary difficulty with a viable long-term future."]]},
 {t:"check", q:"An IVA requires the agreement of creditors owed at least:", o:["50% of the value of debt represented at the meeting","75% of the value of debt represented at the meeting","75% of the creditors attending","100% of all creditors"], a:1,
  e:"75% <em>by value</em>, of debt represented at the meeting — not a headcount. That's why a single large creditor can carry the vote."}]}
]};

const T6 = {n:"Topic 6", t:"Wills, intestacy & trusts", ac:"AC3.2", m:[

{id:"t6a", title:"Making a valid will", sub:"Five requirements, two revocations", cards:[
 {t:"teach", h:"What makes it valid", b:"",
  k:["Made by someone <strong>18 or over</strong>","Made <strong>voluntarily</strong>, without pressure","Made by someone with the <strong>mental capacity</strong> to understand the consequences","Handwritten, typed or printed","<strong>Signed and witnessed</strong>"],
  note:{b:"Dating", x:"There's no legal requirement to date a will — but not dating it causes trouble if there's more than one and the order can't be established."}},
 {t:"teach", h:"Revocation", b:"<p>A new will should contain a <strong>revocation clause</strong> cancelling all former wills — almost always the first clause, and one of the most important.</p>",
  tbl:[["Marriage","<strong>Automatically revokes</strong> a will — unless it was written in anticipation of that marriage."],["Divorce","Does <strong>not</strong> revoke the will, but the former spouse is automatically eliminated from benefiting unless the will says otherwise."]],
  hook:"Marriage rips it up. Divorce just crosses out a name."},
 {t:"check", q:"Which event automatically revokes an existing will?", o:["Divorce","Marriage, unless the will anticipated it","The birth of a child","Moving abroad"], a:1,
  e:"Marriage revokes. Divorce leaves the will standing but removes the ex-spouse from benefiting."},
 {t:"teach", h:"Anatomy of an estate", b:"",
  tbl:[["Estate","Everything owned at death. Jointly owned assets pass automatically to the co-owner <strong>unless</strong> held as tenants in common."],["Legacy / legatee","A specific item or sum, and the person who receives it."],["Residuary estate","What's left after legacies and expenses. <strong>Expenses, taxes and fees come out of the residue</strong>, not out of the legacies."],["Residuary beneficiary","Someone left a share of the residue, usually as a percentage."]],
  note:{b:"Why it matters in advice", x:"The residuary beneficiary absorbs the debts, funeral costs and IHT. Two beneficiaries can be treated very differently depending on how the will is drafted."}},
 {t:"teach", h:"Three types of will", b:"",
  tbl:[["Mirror wills","Near-identical wills, usually leaving everything to each other then on to others. Either party can change theirs at any time."],["Mutual wills","Similar wills with an <strong>agreement</strong> that the survivor cannot revoke theirs once they've taken benefits — a legal contract. Either can revoke <em>before</em> the first death. Stops a remarrying survivor redirecting the estate."],["Codicil","A small change without a new will. Signed by the testator before <strong>two witnesses</strong> and added to the original."]]},
 {t:"check", q:"A couple want certainty that the survivor cannot redirect the estate to a new spouse. They need:", o:["Mirror wills","Mutual wills","A codicil each","Joint tenancy"], a:1,
  e:"Only mutual wills create the binding contract on the survivor. Mirror wills look identical but can be freely changed."}]},

{id:"t6b", title:"Intestacy", sub:"The rules that ignore your wishes", cards:[
 {t:"teach", h:"The vocabulary", b:"",
  tbl:[["Absolutely","The beneficiary owns the assets outright — but if under 18, held in trust until 18."],["Issue","Children of the deceased."],["Remoter issue","Grandchildren, great-grandchildren and so on."],["Spouse","Includes civil partners — <strong>not</strong> common-law partners."]]},
 {t:"teach", h:"The principles", b:"",
  k:["A spouse must survive the deceased by <strong>28 days</strong> to inherit; otherwise the estate passes as if the deceased were single","Divorced former spouses have no rights; <strong>estranged or separated</strong> spouses are treated as still married","If someone who would have inherited dies first, <strong>their children take their share</strong> equally","<strong>Stepchildren and foster children</strong> have no automatic rights, though they may claim provision","Generally only <strong>solely owned</strong> assets count — most jointly owned assets pass to the survivor","In-laws have no rights; children inherit absolutely only from age 18"],
  hook:"28 days, or you were never married."},
 {t:"teach", h:"The distribution order", b:"",
  tbl:[["Spouse and children","Spouse takes personal chattels plus the <strong>statutory legacy</strong> absolutely, plus <strong>half the balance</strong>. Children share the other half equally, held in trust if under 18."],["Spouse, no children","Everything to the spouse."],["Children, no spouse","Shared equally among the children."],["Neither","Other relatives in order of closeness — and if none survive, the estate goes to <strong>the Crown</strong>."]],
  note:{b:"Check your edition", x:"The statutory legacy figure is reviewed periodically — the text's worked example uses £322,000. Confirm the current amount before the exam."}},
 {t:"check", q:"Cyril dies intestate with a solely owned estate of £355,000, a wife and two adult children. Assuming a statutory legacy of £322,000, the wife receives:", o:["£322,000","£338,500","£355,000","£177,500"], a:1,
  e:"£322,000 plus half the £33,000 balance = £338,500. The two children take £8,250 each."},
 {t:"check", q:"An unmarried couple of 20 years; one dies intestate with no children. The survivor receives:", o:["The whole estate","Half the estate","The statutory legacy only","Nothing under the intestacy rules"], a:3,
  e:"'Spouse' covers civil partners but never common-law partners. This is the single strongest argument for making a will."}]},

{id:"t6c", title:"Probate and varying an estate", sub:"Grants, disclaimers, deeds", cards:[
 {t:"teach", h:"Two different grants", b:"",
  tbl:[["Grant of probate","Where there's a valid will. Executors apply to the Probate Registry; the grant authorises them to administer and distribute in line with the will. IHT is usually payable <strong>before</strong> probate is granted."],["Letters of administration","Where someone dies intestate. An administrator winds up the estate — usually slower, because potential beneficiaries have to be identified."]],
  note:{b:"Small estates", x:"Probate isn't needed for jointly held assets, or under the small estates exemption — cash or investment accounts below £5,000, though institutions often set their own higher limit, commonly £15,000 to £25,000."}},
 {t:"teach", h:"Why appoint more than one executor", b:"<p>If a sole executor dies before the testator, and no new will is made, someone else has to step in and apply for the grant. Appointing two means the survivor can simply carry on.</p>"},
 {t:"teach", h:"Disclaimer vs deed of variation", b:"",
  tbl:[["Disclaimer","A beneficiary <strong>rejects</strong> a bequest in writing. It's treated as never having been made and falls back into the estate. The beneficiary has <strong>no control</strong> over where it goes."],["Deed of variation","A collective agreement that <strong>redirects</strong> all or part of a share to a chosen person. Every beneficiary <strong>adversely affected</strong> must be 18+, of sound mind and in agreement; unaffected beneficiaries have no say. It rewrites the will as if it had always said so."]],
  note:{b:"The deadline", x:"For either to be effective for IHT planning, it must be executed within <strong>two years</strong> of death."},
  hook:"Disclaim = give it up. Vary = give it away."},
 {t:"check", q:"A beneficiary wants to reject a bequest entirely, with no say in where it goes. They should execute:", o:["A deed of variation","A disclaimer","A codicil","A deed of assignment"], a:1,
  e:"A disclaimer refuses the gift and it returns to the estate. A deed of variation is the one that lets you choose the destination."},
 {t:"check", q:"A deed of variation must be executed within how long of death to be effective for IHT?", o:["Six months","One year","Two years","Seven years"], a:2,
  e:"Two years — the same deadline as a disclaimer."}]},

{id:"t6d", title:"Types of trust", sub:"Bare, IIP, discretionary and the rest", cards:[
 {t:"teach", h:"The three parties", b:"<p>A <strong>settlor</strong> gives assets to <strong>trustees</strong>, who look after them for the <strong>beneficiaries</strong> — passing value on without the beneficiary gaining control.</p><p>Once gifted into trust, the property is out of the settlor's estate for IHT <strong>provided the settlor retains no interest</strong>. Retain a benefit and it's a gift with reservation, which doesn't work.</p>"},
 {t:"teach", h:"Bare and interest in possession", b:"",
  tbl:[["Bare (absolute) trust","Beneficiaries are <strong>absolutely entitled</strong>. Aged 18+ they can demand the assets at any time and trustees cannot refuse. The simplest form. Gifts to it are <strong>PETs</strong> — no IHT if the settlor survives seven years."],["Interest in possession","A beneficiary receives income, or use of an asset, for life or until a stated contingency. The <strong>life tenant</strong> holds the interest in possession; the <strong>remaindermen</strong> take the capital afterwards. 'Relevant property' — a transfer to it is a <strong>chargeable lifetime transfer</strong>."],["Immediate post-death interest","Same structure, but created <strong>in the will</strong>, so the gift happens on death. Taxed as a normal bequest — no CLT charge."]],
  hook:"Life tenant enjoys it. Remaindermen inherit it."},
 {t:"teach", h:"The 20% lifetime charge", b:"<p>A gift into a relevant property trust above the nil-rate band is charged at <strong>20%</strong> immediately — half the standard rate. Gifts in the previous seven years also count against the band.</p>",
  note:{b:"What happens next", x:"Survive seven years and no further tax is due — but there's no refund of the 20%. Die within seven years and IHT is recalculated with taper, and the 20% already paid is deducted. Again, no refund if it overshoots."}},
 {t:"check", q:"A settlor gifts £280,000 into a relevant property trust, having gifted £100,000 to another such trust five years ago. Nil-rate band £325,000. The immediate charge is:", o:["Nothing","20% on £55,000","40% on £55,000","20% on £280,000"], a:1,
  e:"£100,000 + £280,000 = £380,000, which is £55,000 over the band. The CLT rate is 20%."},
 {t:"teach", h:"Discretionary and life assurance trusts", b:"",
  tbl:[["Discretionary","Trustees choose <strong>who</strong> benefits from a stated class and <strong>whether</strong> to pay income or capital at all — including beneficiaries not yet born. The settlor can leave a written <strong>expression of wishes</strong>, but it is <strong>not binding</strong>. Also relevant property, so a CLT."],["Flexible (power of appointment)","Essentially a discretionary trust for life policies. Trustees can vary beneficial interests, but a <strong>default beneficiary</strong> must be named."],["Split trust","Used with a combined life and critical illness policy. Benefits payable <strong>while the insured is alive</strong> — the CIC element — stay <strong>outside</strong> the trust so the insured receives them; the life cover is held in trust."]],
  note:{b:"Why split trusts exist", x:"Put the whole policy in trust and the client can't touch their own critical illness payout. Splitting it solves that."}},
 {t:"check", q:"A settlor wants trustees to decide later which grandchildren benefit, including any born after the trust is set up. Which trust?", o:["Bare trust","Interest in possession","Discretionary trust","Immediate post-death interest"], a:2,
  e:"Only a discretionary trust lets trustees select from a class, including unborn beneficiaries, and decide whether to pay at all."},
 {t:"teach", h:"Two simpler alternatives", b:"",
  tbl:[["Designating an account","Invest and add the child's initials after your name — 'Frank Worth (TW account)'. Shows the money is for the child while the adult keeps control until they turn 18. If a <strong>parent</strong> provides the money, income above <strong>£100 a year</strong> is treated as the parent's, and the parent bears CGT. From any other source, income and gains rest with the child."],["MWPA 1882 trust","A statutory trust created automatically when someone takes out a policy on their own life for the specific benefit of their spouse or children. The policy need not mention the Act or declare a trust expressly."]],
  note:{b:"Why designation exists", x:"A child under 18 (16 for savings accounts) cannot enter a contract, so cannot hold the account themselves."}}]}
]};

/* FRE1 Topic 7 — development of regulation; Topic 8 — PRA and FCA */
const T7 = {n:"Topic 7", t:"How regulation developed", ac:"AC4.1, AC5.1", m:[

{id:"t7a", title:"From self-regulation to Twin Peaks", sub:"The Acts, in order", cards:[
 {t:"teach", h:"Deregulate, then regulate", b:"<p>Until the 1980s, credit controls limited banks in the mortgage market and building societies were confined to residential lending and simple savings. The <strong>Building Societies Act 1986</strong> and <strong>Banking Act 1987</strong> opened things up.</p><p>A bigger, more complex market exposed inadequate law and weak consumer protection. The <strong>Financial Services Act 1986</strong> introduced an element of <strong>self-regulation</strong>.</p>",
  note:{b:"Why it failed", x:"By the mid-1990s self-regulation looked unsuccessful and the structure too fragmented — a banking group could answer to the Bank of England plus several other bodies. The <strong>collapse of Barings Bank in 1995</strong> exposed the confusion, with both the Bank of England and the Securities and Futures Authority criticised."}},
 {t:"teach", h:"FSMA 2000 and the tripartite system", b:"<p>The <strong>Financial Services and Markets Act 2000</strong> made the FSA the <strong>single regulator</strong>, covering solvency, capital adequacy, sales and marketing, crime prevention, competence, complaints and compensation. It specified activities and investments that only authorised persons could carry out.</p><p>The FSA sat inside the <strong>tripartite system</strong>: the Bank of England, the FSA and the Treasury — 'the Authorities'.</p>",
  note:{b:"Where it broke", x:"The tripartite system was criticised during the financial crisis, particularly after Northern Rock: none of the three was sure who should take ultimate responsibility."}},
 {t:"teach", h:"The Acts, on a timeline", b:"",
  tbl:[["FS Act 1986","Self-regulation."],["FSMA 2000","FSA as single regulator."],["FS Act 2012","<strong>Twin peaks</strong> from 1 April 2013 — the 'legal cutover'. Created the PRA and FCA by amending FSMA 2000."],["BoE and FS Act 2016","PRA moved from a <em>subsidiary</em> of the Bank to <em>part</em> of it, under the new <strong>Prudential Regulation Committee</strong>. Extended <strong>SM&CR</strong> from banks and major insurers to all sectors."],["EU (Withdrawal) Act 2018","Retained EU law; PRA and FCA given powers to correct deficiencies — 'onshoring'."],["FS Act 2021","Dealt with 'in-flight' EU legislation — rules adopted or under negotiation but not in force at exit."],["FSMA 2023","Repeals and replaces retained EU law; adds the secondary competitiveness and growth objective."]],
  hook:"1986 self · 2000 single · 2012 split."},
 {t:"check", q:"Which legislation created the PRA and the FCA?", o:["Financial Services Act 1986","Financial Services and Markets Act 2000","Financial Services Act 2012","Bank of England and Financial Services Act 2016"], a:2,
  e:"The FS Act 2012 introduced twin peaks from April 2013 by amending FSMA 2000. The 2016 Act then restructured the PRA within the Bank."},
 {t:"check", q:"The Bank of England and Financial Services Act 2016 extended the SM&CR to:", o:["Banks only","Banks and major insurers","All sectors of financial services","Overseas firms only"], a:2,
  e:"It rolled the regime out across all sectors — and moved the PRA inside the Bank under the PRC."}]},

{id:"t7b", title:"Who's who in the framework", sub:"Treasury, Bank, FPC, PRA, FCA", cards:[
 {t:"teach", h:"The chain of responsibility", b:"",
  tbl:[["HM Treasury","Responsible for financial services <strong>policy</strong> and the framework for regulation and stability. <strong>Not a regulator</strong>, but has oversight of the entire system. The FCA is accountable to the Treasury."],["Bank of England","Responsible for protecting and enhancing the UK financial system."],["FPC","<strong>Macroprudential</strong> supervision — the big picture. Chaired by the Governor. Identifies, monitors and acts on <strong>systemic risks</strong>, without harming the sector's capacity to support growth."],["PRA","Part of the Bank. Prudential regulation of banks, building societies, credit unions, insurers and major investment firms. Decisions made by the <strong>PRC</strong>."],["FCA","<strong>Not a government department</strong> — a limited company with statutory powers, formerly the FSA. Its board is appointed by the Treasury. Conduct of wholesale and retail markets, plus prudential regulation of around 50,000 smaller firms."]],
  hook:"Treasury sets it, Bank steadies it, FCA polices it."},
 {t:"teach", h:"The FPC's two tools", b:"",
  tbl:[["Counter-cyclical buffer (CCyB)","Require banks to build capital while profits are good, as a buffer for harder times — aimed at cyclical risks like unsustainable credit growth."],["Sectoral capital requirements (SCR)","Change capital requirements for specific exposures: <strong>residential property including mortgages</strong>, <strong>commercial property</strong>, and <strong>other financial sector</strong> exposures."]],
  note:{b:"Powers, not just tools", x:"The FPC can <em>recommend</em> to the PRA or FCA, and can <em>direct</em> them to act. Both tools apply to UK-incorporated banks, building societies and large broker-dealers."}},
 {t:"check", q:"Which body has responsibility for maintaining the stability of the UK financial system as a whole?", o:["The Monetary Policy Committee","The Financial Policy Committee","HM Treasury","The Financial Conduct Authority"], a:1,
  e:"The FPC does macroprudential supervision. The MPC sets the Bank rate; the Treasury sets policy but doesn't regulate."},
 {t:"check", q:"The FCA is best described as:", o:["A government department","A limited company with statutory powers","A committee of the Bank of England","A subsidiary of the Treasury"], a:1,
  e:"It's a limited company, formerly the FSA, whose board the Treasury appoints and to which it is accountable."}]},

{id:"t7c", title:"Authorisation", sub:"Threshold conditions and permissions", cards:[
 {t:"teach", h:"Authorised or criminal", b:"<p>Firms can only operate with appropriate authorisation from the PRA and/or FCA for specified <strong>regulated activities</strong>. Carrying them out without it is a <strong>criminal offence</strong>.</p>",
  tbl:[["Doesn't need individual authorisation","An adviser employed by an authorised firm, or part of a network."],["Does","Someone running their own business."],["Recognised, not authorised","The Bank of England, recognised investment exchanges and clearing houses."],["Exempt","Executors and trustees, and solicitors dealing with regulated investments as part of professional duties without payment related to the investment."]]},
 {t:"teach", h:"Seven threshold conditions", b:"<p>Met at the outset <strong>and on a continuing basis</strong>:</p>",
  k:["<strong>Legal status</strong> — e.g. insurance business requires a corporate body","<strong>Location of offices</strong> — the PRA requires a UK-incorporated firm to keep head and registered offices in the UK","<strong>Adequate resources</strong> to measure, monitor and manage risk","<strong>Adequate capital and liquidity</strong> for the type of business","<strong>Suitability</strong> of the firm and its staff","The firm's <strong>business model</strong>","<strong>Effective supervision</strong>"],
  hook:"Status, Site, Resources, Capital, Suitability, Model, Supervision."},
 {t:"check", q:"Threshold conditions must be met:", o:["Only when first applying for authorisation","Only during FCA visits","At the outset and on a continuing basis","Only by dual-regulated firms"], a:2,
  e:"Continuously. Falling below them can cost a firm its permissions."},
 {t:"teach", h:"Regulated activities and investments", b:"<p>Both are defined by the <strong>Regulated Activities Order 2001</strong> under FSMA 2000.</p>",
  tbl:[["Activities","Accepting deposits · effecting and carrying out insurance contracts including funeral plans · dealing and arranging deals in investments · managing investments · establishing and operating collective investment schemes · establishing and operating stakeholder and personal pensions including SIPPs · advising on investments · mortgage lending and administration · advising on and arranging mortgages · advising on and arranging general insurance · regulated consumer credit."],["Investments","Deposits · e-money · insurance contracts including funeral plans · shares, loan stocks, debentures and warrants · gilts and local authority stocks · units in collective investment schemes · rights under stakeholder pensions · options and futures · mortgage contracts."]],
  note:{b:"Two sub-categories", x:"Regulated investments split into <strong>investments</strong> (shares, gilts) and <strong>contractually based investments</strong> (life policies, personal pensions, options, futures)."}}]},

{id:"t7d", title:"The other regulators", sub:"CMA, TPR, ICO and the watchdogs inside firms", cards:[
 {t:"teach", h:"Three bodies alongside the PRA and FCA", b:"",
  tbl:[["CMA","An independent government department promoting competition. Investigates mergers and markets, prevents anti-competitive behaviour, protects consumers from unfair trading."],["TPR","Sponsored by the <strong>DWP</strong>, responsible for <strong>work-based</strong> pension schemes. Enforces automatic enrolment, protects members' benefits, promotes good administration, reduces calls on the <strong>Pension Protection Fund</strong>. It is <strong>not</strong> responsible for underperformance or mis-selling of personal pensions."],["ICO","Upholds information rights and data protection."]],
  note:{b:"Overlap rule", x:"Where remits overlap, the PRA/FCA take primary responsibility."}},
 {t:"check", q:"A member complains that their workplace personal pension was mis-sold. Who is responsible?", o:["The Pensions Regulator","The FCA","The Competition and Markets Authority","The Information Commissioner"], a:1,
  e:"TPR covers administration, funding and enrolment for work-based schemes — but mis-selling and underperformance are conduct matters for the FCA."},
 {t:"teach", h:"TPR's five priorities", b:"",
  k:["<strong>Security</strong> — savers' money is secure","<strong>Value for money</strong>","<strong>Scrutiny of decision-making</strong> — decisions taken on savers' behalf are in their best interests","<strong>Embracing innovation</strong> — the market innovates to meet savers' needs","<strong>Bold and effective regulation</strong>"]},
 {t:"teach", h:"Oversight inside the firm", b:"",
  tbl:[["Auditors","Independent examination of the accounts, reporting on a true and fair view."],["Trustees","Owe a duty of care to beneficiaries and must act within the trust deed."],["Compliance officers","Ensure the firm operates within regulatory requirements and act as the link to the regulator."]],
  note:{b:"Third tier", x:"Remember the four-tier picture: Acts of Parliament, regulators, the firms' own policies and compliance departments, then arbitration schemes. These roles are the third tier doing its job."}}]}
]};

const T8 = {n:"Topic 8", t:"PRA & FCA in practice", ac:"AC5.1, AC5.2", m:[

{id:"t8a", title:"Principles-based regulation", sub:"Outcomes over tick-boxes", cards:[
 {t:"teach", h:"Three elements", b:"",
  k:["Regulators set <strong>principles</strong>, supported by rules and guidance, with emphasis on <strong>outcomes rather than processes</strong>","Regulators <strong>assess risk</strong> from firms, activities and products, then set rules and supervision to mitigate it","<strong>Proactivity</strong> — monitoring systems that identify problems before they become serious"],
  note:{b:"What it replaced", x:"Inflexible 'one size fits all' rules produced a <strong>tick-box</strong> culture, where firms protected themselves from the regulator rather than serving customers — and strict rule-following sometimes harmed customers anyway. The burden fell hardest on small firms with little systemic impact."},
  hook:"Principles, Risk, Proactivity."},
 {t:"teach", h:"Regulation can't prevent all failure", b:"<p>Over-regulation costs innovation and flexibility. Senior managers must run the firm well and mitigate risk — but <strong>customers must take some responsibility</strong> for their own decisions, given appropriate information and advice.</p>",
  tbl:[["Prudential regulation","The financial <strong>safety and stability</strong> of institutions and the system — can they meet obligations and absorb problems?"],["Conduct regulation","How a firm <strong>markets, sells and services</strong> products and deals with customers."]]},
 {t:"check", q:"Which is NOT a principle of regulation the FCA and PRA must consider?", o:["Proportionality","Consumer responsibilities","Contributing towards firms' profitability","Openness and disclosure"], a:2,
  e:"Profitability is never a regulatory principle. The list runs: efficient use of resources, proportionality, sustainable growth, environmental goals, consumer responsibilities, senior management responsibility, recognising differences between businesses, openness and disclosure, transparency."}]},

{id:"t8b", title:"Objectives: PRA and FCA", sub:"Four, and one plus three plus one", cards:[
 {t:"teach", h:"The PRA's four objectives", b:"<p>Statutory means set out in legislation. The PRA regulates banks, building societies, credit unions, insurers and major investment firms — <strong>prudentially only</strong>; conduct is the FCA's.</p>",
  k:["Promote the <strong>safety and soundness</strong> of the firms it regulates","Contribute to an appropriate degree of protection for <strong>insurance policyholders</strong>","Facilitate <strong>effective competition</strong> between firms","Facilitate the <strong>international competitiveness</strong> of the UK economy and its growth in the medium to long term"],
  note:{b:"Common error", x:"Answering 'safety and soundness' alone. There are four."},
  hook:"Safety · Policyholders · Competition · Competitiveness."},
 {t:"check", q:"How many statutory objectives does the PRA have?", o:["One","Two","Three","Four"], a:3,
  e:"Four: safety and soundness, policyholder protection, effective competition, and international competitiveness and growth."},
 {t:"teach", h:"The FCA's objectives", b:"",
  tbl:[["Strategic","Ensure that the <strong>relevant markets function well</strong>."],["Secondary","Facilitate the international competitiveness of the UK economy and its growth in the medium to long term."],["Operational ×3","Protect <strong>consumers</strong> from bad conduct · protect the <strong>integrity</strong> of the UK financial system · promote effective <strong>competition</strong> in the interests of consumers."]],
  hook:"One strategic, three operational: Consumers, Integrity, Competition."},
 {t:"check", q:"The FCA's strategic objective is to:", o:["Protect consumers from bad conduct","Ensure relevant markets function well","Promote effective competition","Protect market integrity"], a:1,
  e:"That's the single strategic objective. The other three are the operational objectives that support it."},
 {t:"teach", h:"Baseline supervision and capital adequacy", b:"<p>Every PRA firm gets a minimum level of supervision: compliance with capital standards; liquidity, asset values, provisioning and reserves; an <strong>annual</strong> risk assessment; and assessment of contingency plans for recovery and market exit. The <strong>Proactive Intervention Framework</strong> identifies threats to viability early.</p>",
  note:{b:"Capital adequacy in one line", x:"Losses should fall on <strong>shareholders</strong>, not depositors. Minimum capital is expressed as a <strong>solvency ratio</strong> — capital as a proportion of assets, weighted by the risk of those assets."}}]},

{id:"t8c", title:"How the FCA supervises", sub:"Fixed portfolio, three types of work", cards:[
 {t:"teach", h:"Supervision, defined", b:"<p>'The oversight of firms and individuals to reduce actual and potential harm to consumers and markets.'</p><p>Supervisory principles include being <strong>forward looking</strong>, focusing on <strong>strategy and business models</strong>, on <strong>culture and governance</strong>, on <strong>individual as well as firm accountability</strong>, being <strong>proportionate and risk based</strong>, <strong>two-way</strong> in communication, <strong>co-ordinated</strong>, and putting right systemic harm.</p>"},
 {t:"teach", h:"Who supervises whom", b:"",
  tbl:[["Fixed portfolio firms","Larger firms posing the biggest risk, supervised by a dedicated team of FCA <strong>proactive supervisors</strong> on an ongoing cycle."],["Flexible portfolio","Everyone else, handled by the FCA's general supervision team."]],
  note:{b:"Risk-based means", x:"Supervision is proportionate to risk. The FCA looks at <strong>root causes</strong> rather than symptoms, and will intervene early in a product's life span."}},
 {t:"teach", h:"Three types of supervisory work", b:"",
  k:["<strong>Proactive</strong> — pre-emptive identification of potential harm through review of firms and portfolios, including business model analysis and drivers of culture","<strong>Reactive</strong> — dealing with issues emerging or already happened, to stop harm growing","<strong>Thematic</strong> — diagnostic or remedy work where harm spans a number of firms"],
  hook:"Before, during, across."},
 {t:"check", q:"The FCA supervision model is based on which three types of work?", o:["Preventive, corrective and punitive","Proactive, reactive and thematic","Fixed, flexible and thematic","Prudential, conduct and market"], a:1,
  e:"Proactive, reactive, thematic. Fixed and flexible describe the <em>firms</em>, not the work."},
 {t:"teach", h:"Powers with teeth", b:"",
  k:["<strong>Preventing financial crime</strong> — money laundering, fraud, bribery and corruption","<strong>Intervention</strong> — stopping a firm's actions","<strong>Discipline</strong> and <strong>enforcement</strong>, increasingly against individuals and senior management","Power to publish a <strong>warning notice</strong> and a summary of reasons — so disciplinary action becomes public early","<strong>Super-complaints</strong> under the FS Act 2012: a designated consumer body such as Which? can complain about a market or product feature damaging consumers"],
  note:{b:"What the FCA can't do", x:"It cannot fire an employee of an authorised firm found guilty of misconduct. It <em>can</em> withdraw approval — and pursue other routes through the courts."}},
 {t:"check", q:"An employee of an authorised firm is found guilty of misconduct. The FCA can:", o:["Dismiss them directly","Withdraw its approval of them","Fine their line manager automatically","Close the firm without notice"], a:1,
  e:"Withdrawing approval is the FCA's own power. Dismissal is the employer's decision, and other sanctions run through the courts."}]},

{id:"t8d", title:"The FCA Handbook", sub:"Rules, guidance and client money", cards:[
 {t:"teach", h:"Rules vs guidance", b:"",
  tbl:[["Rules","Create <strong>binding obligations</strong>. Breach can mean enforcement action and, in some circumstances, an action for damages."],["Guidance","Explains the rules and shows ways to comply. <strong>Not binding</strong> — a firm can't be disciplined merely for ignoring it. But acting in line with guidance in the circumstances it contemplates raises a presumption of compliance."]],
  hook:"Rules bind. Guidance protects."},
 {t:"teach", h:"The blocks", b:"",
  tbl:[["High Level Standards","Principles for Businesses · senior management arrangements, systems and controls · threshold conditions · statements of principle · the fit and proper test."],["Prudential standards","Financial soundness: valuation of assets and liabilities, reserves, reporting. One general sourcebook plus six for specific business types."],["Business standards","<strong>Conduct of Business</strong> sourcebooks for marketing and sales, one per business type, plus <strong>CMCOB</strong> for claims management. <strong>Market Conduct</strong> covers market abuse, insider dealing, trading platforms and benchmarks."],["Regulatory processes","Authorisation, the Supervision Manual, and SM&CR / approved persons."]]},
 {t:"teach", h:"Training and competence", b:"<p>Everyone must be competent to do their job, and some roles require specific qualifications and ongoing development.</p>",
  tbl:[["Financial advisers","<strong>Level 4</strong> — such as DipFA, broadly equivalent to the first year of a degree. Specialists in pension transfers, equity release and long-term care need additional qualifications."],["Mortgage advisers","<strong>Level 3</strong> — such as CeMAP, equivalent to A-level."]],
  hook:"Mortgages 3, investments 4."},
 {t:"check", q:"A financial adviser giving personal recommendations on regulated investments must hold a qualification at:", o:["Level 2","Level 3","Level 4","Level 6"], a:2,
  e:"Level 4 for financial advisers; Level 3 for mortgage advisers."},
 {t:"teach", h:"CASS — client money rules", b:"<p>Client money must be held in a clearly separate client account with a bank, credit institution or money market fund, <strong>set up as a trust</strong>. Money received must be used immediately for a specific transaction, or paid into the client bank account by <strong>close of business the following day</strong>.</p>",
  note:{b:"Paying away dormant balances", x:"Firms may pay away money after <strong>six years</strong> of no activity, or assets after <strong>twelve</strong>, to a registered charity. Above the de minimis — <strong>£25</strong> retail, <strong>£100</strong> other clients — the firm must take reasonable steps to contact the client <strong>three times</strong> first. There is no de minimis for assets."}},
 {t:"check", q:"An IFA holds £400 of client money in an account with no activity for six years. Before paying it away, the firm must:", o:["Do nothing — six years is enough","Take reasonable steps to contact the client three times","Notify the FCA and wait 12 months","Transfer it to the FSCS"], a:1,
  e:"£400 is above the £25 retail de minimis, so three reasonable attempts at contact are required. The six-year clock applies to money; assets take twelve years."}]},

{id:"t8e", title:"SM&CR", sub:"Three components, three firm types", cards:[
 {t:"teach", h:"Why it exists", b:"<p>SM&CR applies to <strong>all firms authorised under FSMA</strong>. It exists to make senior staff accountable where failings could threaten the firm, and to catch other staff whose actions could cause significant harm — reducing consumer harm and strengthening market integrity.</p>",
  k:["<strong>Senior Managers Regime</strong> — those who control the firm","<strong>Certification Regime</strong> — not senior managers, but able to cause harm","<strong>Conduct Rules</strong> — applying to all those subject to SM&CR"]},
 {t:"teach", h:"Three categories of firm", b:"",
  tbl:[["Limited scope","Sole traders and limited permission consumer credit firms. <strong>Exempt from the baseline requirements</strong>, typically with fewer senior management functions."],["Core","<strong>Most firms.</strong> Must comply with the baseline requirements."],["Enhanced","A few firms whose size, complexity and potential impact warrant <strong>additional</strong> requirements."]],
  note:{b:"Exam trap", x:"'Basic' is not a category. The three are limited scope, core and enhanced."},
  hook:"Limited < Core < Enhanced."},
 {t:"check", q:"Which is NOT an SM&CR firm category?", o:["Limited scope","Core","Basic","Enhanced"], a:2,
  e:"There is no 'basic'. Limited scope firms are exempt from the baseline; core firms follow it; enhanced firms do more."},
 {t:"teach", h:"Senior managers", b:"<p>A senior manager holds a function carrying <strong>risk of serious consequences</strong> for the firm or wider interests — managing, deciding, or participating in decisions.</p>",
  k:["<strong>Senior management functions (SMFs)</strong> — defined roles within the regime","<strong>Prescribed responsibilities</strong> allocated to SMFs","Individual <strong>statements of responsibilities</strong> and a <strong>duty of responsibility</strong>","Firms apply to the regulator for <strong>approval</strong>, including a <strong>criminal record check</strong>"],
  note:{b:"Sole trader example", x:"An IFA sole trader with staff subject to certification needs approval in the <strong>limited scope function, SMF 29</strong>. Cross <strong>£1m</strong> turnover and someone must hold <strong>compliance oversight, SMF 16</strong> — though it can be the same person. The sole trader is not themselves subject to certification."}},
 {t:"teach", h:"Certification", b:"<p>Employees performing a <strong>significant harm function</strong>. The FCA does <strong>not</strong> approve them — the <strong>firm</strong> assesses and certifies fitness and propriety, initially and then <strong>annually</strong>.</p>",
  k:["Significant management functions","Functions subject to qualifications — financial adviser, mortgage adviser","Client-dealing functions","Material risk takers"],
  note:{b:"Watch the boundary", x:"The Certification Regime doesn't apply to a sole trader as an individual, but does apply to their employees who fall within scope."}},
 {t:"check", q:"Certification staff are approved by:", o:["The FCA, before they start","The firm, initially and annually","The PRA, every three years","No one — certification is voluntary"], a:1,
  e:"The FCA approves senior managers; the firm certifies its own significant-harm staff and re-checks each year."}]},

{id:"t8f", title:"Conduct rules & fitness", sub:"Six, plus four, plus three tests", cards:[
 {t:"teach", h:"The six individual conduct rules", b:"<p>In COCON 2.1, replacing the old Statements of Principle. They apply to <strong>all employees</strong> except purely ancillary roles — reception, transport, security, medical staff.</p>",
  k:["1. Act with <strong>integrity</strong>","2. Act with <strong>due skill, care and diligence</strong>","3. Be <strong>open and co-operative</strong> with the FCA, PRA and other regulators","4. Pay due regard to the <strong>interests of customers</strong> and treat them fairly","5. Observe proper <strong>standards of market conduct</strong>","6. Act to deliver <strong>good outcomes for retail customers</strong>"],
  note:{b:"Rule 6 is newer", x:"It was added to carry the Consumer Duty down to individual level. Older materials list only five."},
  hook:"Integrity · Skill · Openness · Customers · Market · Outcomes."},
 {t:"check", q:"Which is NOT an individual conduct rule?", o:["Act with integrity","Observe proper standards of market conduct","Maximise returns for shareholders","Act to deliver good outcomes for retail customers"], a:2,
  e:"Shareholder returns appear nowhere in COCON. The six run from integrity to good retail outcomes."},
 {t:"teach", h:"Four senior manager conduct rules", b:"",
  k:["<strong>SC1</strong> — take reasonable steps to ensure the business you're responsible for is <strong>controlled effectively</strong>","<strong>SC2</strong> — take reasonable steps to ensure it <strong>complies</strong> with regulatory requirements and standards","<strong>SC3</strong> — <strong>delegate</strong> only to an appropriate person, and oversee the discharge effectively","<strong>SC4</strong> — <strong>disclose</strong> appropriately any information the FCA or PRA would reasonably expect notice of"],
  hook:"Control · Comply · Delegate · Disclose."},
 {t:"teach", h:"Fit and proper: three criteria", b:"",
  tbl:[["Honesty, integrity and reputation","Criminal record, disciplinary proceedings, known regulatory contraventions, complaints about regulated activities, insolvency or managing insolvent companies, dismissal from a position of trust or disqualification as a director."],["Competence and capability","Including the FCA's training and competence requirements where relevant."],["Financial soundness","Current financial position, previous bankruptcy or adverse credit rating."]],
  note:{b:"Public record", x:"The <strong>Financial Services Register</strong> shows firms, individuals and bodies regulated by the PRA and/or FCA. The <strong>FCA Directory</strong> lists certified and assessed persons, so consumers can check who they're dealing with."},
  hook:"Honest · Able · Solvent."},
 {t:"check", q:"An adviser with an adverse credit rating is being assessed. This goes to which fit and proper criterion?", o:["Honesty and integrity","Competence and capability","Financial soundness","None — credit isn't relevant"], a:2,
  e:"Financial soundness covers current position and previous bankruptcy or adverse credit. It is expressly part of the test."},
 {t:"teach", h:"Appointed representatives", b:"<p>An AR carries out regulated activities under the responsibility of an authorised <strong>principal</strong> firm. The AR is <strong>not directly authorised</strong>.</p><p>The principal is responsible for the AR's activities, for its fitness and propriety assessments, and for supplying required data to the FCA. That's why choosing a principal matters — its failings become the AR's problem, and vice versa.</p>",
  note:{b:"Typical exam framing", x:"'Great Advice Ltd operates as an AR of Eagle Mortgages.' Great Advice will <strong>not</strong> be directly authorised — Eagle carries the responsibility."}},
 {t:"check", q:"A firm operating as an appointed representative of an authorised principal is:", o:["Directly authorised by the FCA","Not directly authorised — the principal is responsible for it","Exempt from all conduct rules","Regulated by the PRA"], a:1,
  e:"The principal is responsible for the AR's activities, fitness and propriety assessments, and FCA data."}]}
]};

/* FRE2 preview — skills, principles and ethical behaviours */
const T9 = {n:"FRE2", t:"Skills, principles & ethics", ac:"Preview — not in the FRE1 text", m:[

{id:"f2a", title:"The advice process", sub:"Six steps, in order", cards:[
 {t:"teach", h:"The sequence", b:"",
  k:["<strong>Establish the relationship</strong> — scope, service, costs, independent or restricted","<strong>Gather information</strong> — the factfind: financial and personal circumstances, objectives and needs, attitude to risk and <strong>capacity for loss</strong>, priorities","<strong>Analyse</strong> — identify needs, shortfalls and priorities","<strong>Recommend</strong> — suitable solutions, in a suitability report","<strong>Implement</strong>","<strong>Review</strong> — the ongoing service, if charged for, must actually happen"],
  note:{b:"Why the factfind carries the weight", x:"Recommendations are based on the information gathered. Accurate, comprehensive factfinding is what makes the advice defensible."}},
 {t:"check", q:"Attitude to risk and capacity for loss are established at which step?", o:["Establishing the relationship","Gathering information","Recommending","Reviewing"], a:1,
  e:"Both are factfind outputs — and they're different things: willingness to take risk versus ability to absorb a loss."},
 {t:"teach", h:"Independent or restricted", b:"<p><strong>Independent</strong>: an unbiased, unrestricted review of all relevant products across the whole of the relevant market.</p><p><strong>Restricted</strong>: limited by provider or product type. Entirely legitimate — but the client must be told clearly, in writing, before advice is given.</p>",
  hook:"Restricted isn't wrong. Hiding it is."},
 {t:"check", q:"An ongoing advice fee is charged but no review is delivered. This most directly breaches:", o:["Nothing, if the client didn't chase it","The price and value outcome","The PRA's safety and soundness objective","The threshold conditions"], a:1,
  e:"Charging for a service that isn't delivered is the textbook fair value failure, and a recurring enforcement theme."}]},

{id:"f2b", title:"Consumer Duty in depth", sub:"Proving good outcomes", cards:[
 {t:"teach", h:"The shift", b:"<p>From 'buyer beware' to a positive obligation: firms must <strong>act to deliver good outcomes</strong> for retail customers — and be able to <strong>evidence</strong> that they have.</p><p>It sits in the FCA Handbook as <strong>Principle 12</strong>, alongside the original eleven Principles for Businesses.</p>"},
 {t:"teach", h:"Three rules, four outcomes", b:"",
  tbl:[["Cross-cutting rules","Act in good faith · Avoid foreseeable harm · Enable and support customers to pursue their financial objectives"],["Products and services","Designed for an identified target market and distributed to it."],["Price and value","Benefit must be reasonable relative to price — fair value, not lowest price."],["Consumer understanding","Communications that equip customers to make informed decisions."],["Consumer support","Support as easy to use as the sale was — no exit obstacle course."]],
  hook:"Good faith, no harm, real support — then prove four outcomes."},
 {t:"check", q:"A product is easy to buy online but cancelling requires a posted letter. Which outcome is breached?", o:["Price and value","Consumer support","Products and services","Consumer understanding"], a:1,
  e:"Support must be no harder than the sale. 'Sludge practices' are exactly what this outcome targets."},
 {t:"teach", h:"The four drivers of vulnerability", b:"<p>Anyone can move in and out of vulnerability — and the 2022 Financial Lives survey found <strong>47%</strong> of UK adults showed at least one characteristic.</p>",
  k:["<strong>Health</strong> — conditions affecting daily activities","<strong>Life events</strong> — bereavement, divorce, job loss","<strong>Resilience</strong> — low capacity to absorb a financial shock","<strong>Capability</strong> — low knowledge, confidence or literacy with money"],
  note:{b:"The standard", x:"The Duty doesn't ask you to give vulnerable clients a <em>different</em> outcome. It asks you to adapt so they reach the <strong>same good outcome</strong>."},
  hook:"HLRC — Health, Life events, Resilience, Capability."},
 {t:"check", q:"A recently bereaved client with strong financial knowledge and healthy savings is:", o:["Not vulnerable — knowledge and savings rule it out","Potentially vulnerable through the life events driver","Vulnerable only if they say so","Automatically unsuitable for advice"], a:1,
  e:"One driver is enough, and bereavement is squarely a life event. Vulnerability is situational, not a permanent label."},
 {t:"check", q:"A client shows low capability and wants a complex, high-risk equity product. You should:", o:["Proceed — it's their money","Refuse to deal with them again","Adapt communication, check understanding, and proceed only if suitable and understood","Quietly sell something simpler without explaining why"], a:2,
  e:"Neither blind execution nor paternalism. Adapt, test understanding, and document how the good outcome was reached."}]},

{id:"f2c", title:"When things go wrong", sub:"FOS, FSCS and the clock", cards:[
 {t:"teach", h:"Two different safety nets", b:"",
  tbl:[["FOS","Free, informal dispute resolution where the firm is <strong>still trading</strong>. Decisions bind the firm, not the consumer — who keeps the right to go to court."],["FSCS","Compensation where a firm has <strong>failed</strong> and cannot pay. Funded by levies on the industry."]],
  note:{b:"Check your edition", x:"Deposit protection is £85,000 per eligible person per authorised institution, but award and cover limits are revised — confirm current figures before the exam."},
  hook:"Still trading → FOS. Gone bust → FSCS."},
 {t:"teach", h:"The complaints clock", b:"<p>The firm has up to <strong>eight weeks</strong> to issue a final response. The client then has <strong>six months</strong> from that response to take it to FOS.</p><p>Behind that sits the overall limit: <strong>six years</strong> from the event, or <strong>three years</strong> from when the client knew, or ought reasonably to have known, they had cause to complain.</p>",
  hook:"8 weeks · 6 months · 6 years / 3 years."},
 {t:"check", q:"A client is unhappy with advice from a firm that is still trading. They should:", o:["Go straight to the FSCS","Complain to the firm, then take it to FOS if unsatisfied","Complain directly to the PRA","Wait six years and then complain"], a:1,
  e:"Complain to the firm first — FOS is the escalation route once the firm has given its final response, or eight weeks have passed."}]},

{id:"f2d", title:"Ethics and financial crime", sub:"Where rules end and judgement starts", cards:[
 {t:"teach", h:"Compliance is the floor", b:"<p>Ethics asks what a professional <em>should</em> do, not merely what they may. A useful test: would you be comfortable if this recommendation, and your real reason for it, appeared in tomorrow's press?</p>",
  note:{b:"Conflicts of interest", x:"Manage them by <strong>disclosing</strong>, <strong>declining</strong>, or <strong>removing</strong> the conflicted party. The conflict you didn't mention is the one that ends careers."}},
 {t:"teach", h:"The AML machinery", b:"",
  tbl:[["CDD","Know your customer — identify and verify, and understand the purpose of the relationship. <strong>EDD</strong> for higher risk, including politically exposed persons."],["MLRO","Suspicion is reported <strong>internally</strong> to the Money Laundering Reporting Officer, who decides on a <strong>SAR</strong> to the National Crime Agency."],["Tipping off","Telling the subject that a report has been made is itself a <strong>criminal offence</strong>."]],
  hook:"Suspect → MLRO → NCA. Never the client."},
 {t:"check", q:"A colleague suspects money laundering. The correct first step is:", o:["Ask the client to explain the transaction","Report internally to the MLRO","Call the police directly","Close the account without explanation"], a:1,
  e:"Internal report to the MLRO, who decides on a SAR. Warning the client is tipping off — a criminal offence."},
 {t:"check", q:"The three classic stages of money laundering are:", o:["Placement, layering, integration","Deposit, transfer, withdrawal","Entry, disguise, exit","Collection, conversion, closure"], a:0,
  e:"Placement gets cash into the system, layering obscures the trail, integration returns it looking legitimate."}]}
]};



export const SERIES = [T1, T2, T3, T4, T5, T6, T7, T8, T9];
export const ALL = SERIES.flatMap((s) => s.m);
export const seriesOf = (m) => SERIES.find((s) => s.m.includes(m));
export const checksIn = (m) => m.cards.filter((c) => c.t === "check").length;
