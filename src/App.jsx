import { useState, useEffect } from 'react'
import * as htmlToImage from 'html-to-image'

function App() {
  const [name, setName] = useState('')
  const [isBornSingle, setIsBornSingle] = useState(false)
  const [singleDate, setSingleDate] = useState('')
  const [age, setAge] = useState('')
  
  const [q2, setQ2] = useState('') 
  const [q2Custom, setQ2Custom] = useState('') 
  const [q3, setQ3] = useState('') 
  const [customReason, setCustomReason] = useState('') 
  const [q4, setQ4] = useState('') 
  const [q4Custom, setQ4Custom] = useState('')
  
  const [desperation, setDesperation] = useState(50)
  const [userImage, setUserImage] = useState(null)
  const [oath, setOath] = useState(false)
  
  const [showCrest, setShowCrest] = useState(false)
  const [loading, setLoading] = useState(false)
  const [loadingText, setLoadingText] = useState('')
  
  // Random Data States
  const [finalTitle, setFinalTitle] = useState('')
  const [finalWarning, setFinalWarning] = useState('')
  const [finalSignature, setFinalSignature] = useState('')

  useEffect(() => {
    let interval;
    if (loading) {
      let step = 0;
      const texts = [
        "আপনার ক্রাশের প্রোফাইল চেক করা হচ্ছে...",
        "আপনার হতাশার লেভেল মাপা হচ্ছে...",
        "সিঙ্গেল কমিটির সভাপতির স্বাক্ষর নেওয়া হচ্ছে..."
      ];
      setLoadingText(texts[0]);
      interval = setInterval(() => {
        step++;
        if (step < texts.length) setLoadingText(texts[step]);
      }, 800);
    }
    return () => clearInterval(interval);
  }, [loading]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserImage(reader.result);
      }
      reader.readAsDataURL(file);
    }
  }

  const generateRandomData = () => {
    let titles = [];
    if (desperation > 85) {
      titles = [
        '"জরুরি ভিত্তিতে পাত্র/পাত্রী চাই" সম্মাননা', 
        '"যেকোনো বয়সের চলবে" অ্যাওয়ার্ড', 
        '"মারাত্মক লেভেলের ডেসপারেট" পদক',
        '"রাস্তায় দাঁড়িয়ে কাঁদব" সম্মাননা'
      ];
    } else if (q3 === 'friendzone' || q4 === 'fuchka') {
      titles = [
        '"আজীবন ভাইয়া/আপু ডাকার শিকার" Shield', 
        '"ন্যাশনাল ফ্রেন্ডজোন চ্যাম্পিয়ন" Trophy', 
        '"ক্রাশের বিয়েতে বিরিয়ানি খাওয়ার" পদক',
        '"ডিজিটাল ভাইয়া/আপু" সম্মাননা'
      ];
    } else if (q3 === 'sakht') {
      titles = [
        '"সার্টিফাইড পাষাণ হৃদয়" Trophy', 
        '"ইমোশনলেস রোবট" সম্মাননা', 
        '"পাথরের টুকরা" অ্যাওয়ার্ড',
        '"ক্রাশকে সিনজোন করার" ট্রফি'
      ];
    } else if (q3 === 'money') {
      titles = [
        '"ইন্টারন্যাশনাল ফইন্নি" অ্যাওয়ার্ড', 
        '"পকেট গড়ের মাঠ" সম্মাননা', 
        '"বাপের হোটেলের ভিআইপি মেম্বার" Medal',
        '"চা খাওয়ার টাকা নাই" ট্রফি'
      ];
    } else if (q3 === 'ugly') {
      titles = [
        '"চেহারা নট ফাউন্ড" অ্যাওয়ার্ড', 
        '"আয়না ভাঙ্গা সৌন্দর্য" পদক', 
        '"লুকস ডাজ নট ম্যাটার" সান্ত্বনা পুরস্কার',
        '"মেকাপেও কাজ হবে না" পদক'
      ];
    } else {
      titles = [
        '"মহান চিরকুমার/চিরকুমারী" সম্মাননা', 
        '"অখন্ড সিঙ্গেল সত্তা" অ্যাওয়ার্ড', 
        '"প্রো-ম্যাক্স সিঙ্গেল" শিরোপা',
        '"প্রেম আমার জন্য না" ট্রফি'
      ];
    }

    const warnings = [
      "জরুরি বিজ্ঞপ্তি: উনার জন্য জরুরি ভিত্তিতে একজন পাত্র/পাত্রী খুঁজছি। নাহলে উনি মানসিক ভারসাম্য হারিয়ে ফেলতে পারেন!",
      "জনস্বার্থে প্রচার: দয়া করে কেউ উনাকে প্রপোজ করবেন না, খুশিতে হার্ট অ্যাটাক করে মারা যেতে পারে!",
      "সতর্কতা: উনাকে রাস্তায় একা দেখলে একটু সান্ত্বনা দেবেন, বেচারা অনেক কষ্টে আছে।",
      "সাবধান! উনি চরম হতাশাগ্রস্ত সিঙ্গেল। যেকোনো সময় হতাশায় উল্টাপাল্টা কাজ করতে পারে!",
      "জরুরি আবেদন: উনার বিয়ের বয়স পার হয়ে যাচ্ছে। কেউ দয়া করে একটু ব্যবস্থা করুন!"
    ];

    const signatures = [
      "প্রেসিডেন্ট, বাথরুমে বসে কাঁদা সংঘ",
      "চেয়ারম্যান, আজীবন সিঙ্গেল কমিটি",
      "সিইও, ক্রাশ খেয়েই জীবন পার লিমিটেড",
      "মহাসচিব, অন্যের প্রেম দেখে জেলাস ট্রাস্ট",
      "উপদেষ্টা, ফ্রেন্ডজোন ভুক্তভোগী ফোরাম"
    ];

    setFinalTitle(titles[Math.floor(Math.random() * titles.length)]);
    setFinalWarning(warnings[Math.floor(Math.random() * warnings.length)]);
    setFinalSignature(signatures[Math.floor(Math.random() * signatures.length)]);
  }

  const calculateTime = () => {
    if (isBornSingle) return { text: `জন্মগতভাবে দীর্ঘ ${age || 0} বছর` }
    if (!singleDate) return { text: '০ দিন' }
    
    const start = new Date(singleDate)
    const today = new Date()
    const diffTime = Math.abs(today - start)
    const totalDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    const years = Math.floor(totalDays / 365)
    const days = totalDays % 365
    return { text: `গত ${years} বছর, ${days} দিন` }
  }

  const getReasonText = () => {
    if (q3 === 'money') return "পকেটে কানাকড়িও না থাকায়";
    if (q3 === 'friendzone') return "সবাই 'ভাইয়া/আপু' বলে ফ্রেন্ডজোনের চিপায় ফেলে রাখায়";
    if (q3 === 'ugly') return "চেহারা এতোটাই মাশাআল্লাহ যে কেউ ফিরেও না তাকানোয়";
    if (q3 === 'sakht') return "অযথা 'শক্ত' ভাব নিয়ে ক্রাশকে 'Hmm' রিপ্লাই দেওয়ায়";
    if (q3 === 'syllabus') return "রিলেশনশিপ জিনিসটা সিলেবাসের একদম বাইরে থাকায়";
    if (q3 === 'custom' && customReason) return `"${customReason}" - এই অদ্ভুত কারণে`;
    return "";
  }

  const duration = calculateTime()

  const handleGenerate = () => {
    alert("আপনার দেওয়া তথ্যগুলো সিঙ্গেল কমিটিতে ভেরিফাই করা হচ্ছে...\n\nকোনো কাপল ধরা পড়লে কিন্তু গণধোলাই দেওয়া হবে!");
    generateRandomData(); 
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowCrest(true);
    }, 3000);
  }

  const handleDownload = () => {
    const crest = document.getElementById('crest-design');
    if (!crest) return;

    htmlToImage.toPng(crest, { quality: 1.0, pixelRatio: 2 })
      .then(function (dataUrl) {
        const link = document.createElement('a');
        link.download = `${name || 'Award'}_Certified_Single.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch(function (error) {
        console.error('Download Error:', error);
        alert("ডাউনলোডে সমস্যা হচ্ছে। দয়া করে আবার চেষ্টা করুন।");
      });
  }

  const getRoastText = () => {
    if (desperation <= 20) return "মিথ্যা কথা! ভেতরে ভেতরে ঠিকই কান্দেন।";
    if (desperation > 20 && desperation <= 60) return "আহা রে! একটু ধৈর্য ধরেন, কেউ না কেউ জুটবে (বোধহয়)।";
    if (desperation > 60 && desperation < 90) return "কষ্ট ভাই কষ্ট! সিঙ্গেল জীবনের চরম কষ্ট!";
    return "আপনার অবস্থা তো খুবই করুণ! পাবনায় মেন্টাল হাসপাতালে সিট বুক করব?";
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-4 py-10">
      
      {!showCrest ? (
        <div className="w-full max-w-xl p-8 space-y-6 border bg-white/10 backdrop-blur-lg border-white/20 rounded-3xl shadow-2xl">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 drop-shadow-sm">
              🏆 বাংলাদেশ সিঙ্গেল সোসাইটি
            </h1>
            <p className="mt-2 text-sm text-gray-300">অফিসিয়াল গোল্ডেন ক্রেস্ট পেতে তথ্যগুলো দিন</p>
          </div>

          {loading ? (
            <div className="py-16 text-center animate-pulse">
              <div className="w-16 h-16 mx-auto mb-6 border-t-4 border-b-4 border-yellow-500 rounded-full animate-spin"></div>
              <p className="text-xl font-bold text-yellow-300">{loadingText}</p>
            </div>
          ) : (
            <div className="space-y-5">
              
              <div className="p-4 border border-dashed rounded-lg bg-black/20 border-white/30">
                <label className="block mb-2 text-sm font-bold text-yellow-300">এমন একটি ছবি দিন যেটা দেখে অন্তত কেউ ক্রাশ খাবে (বাস্তবে লাভ নেই):</label>
                <input type="file" accept="image/*" onChange={handleImageUpload} className="w-full mt-2 text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-yellow-500 file:text-black hover:file:bg-yellow-400"/>
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-200">আপনার নাম:</label>
                <input type="text" className="w-full p-3 text-white border rounded-lg bg-black/30 border-white/20 focus:outline-none focus:border-yellow-500" placeholder="যেমন: ছেঁকা খাওয়া মজনু / ব্যর্থ প্রেমিক" value={name} onChange={(e) => setName(e.target.value)} />
              </div>

              <div className="flex items-center p-3 border rounded-lg bg-black/30 border-white/20">
                <input type="checkbox" id="bornSingle" className="w-5 h-5 text-yellow-500 rounded focus:ring-yellow-500 accent-yellow-500" checked={isBornSingle} onChange={(e) => setIsBornSingle(e.target.checked)} />
                <label htmlFor="bornSingle" className="ml-3 font-bold text-yellow-300">আমি জন্মগতভাবেই সিঙ্গেল! ✋</label>
              </div>

              {isBornSingle ? (
                <div>
                  <label className="block mb-2 text-sm text-gray-200">তাহলে আপনার বয়স কত?</label>
                  <input type="number" className="w-full p-3 text-white border rounded-lg bg-black/30 border-white/20 focus:outline-none focus:border-yellow-500" placeholder="যেমন: ২৪" value={age} onChange={(e) => setAge(e.target.value)} />
                </div>
              ) : (
                <div>
                  <label className="block mb-2 text-sm text-gray-200">কবে থেকে সিঙ্গেল?</label>
                  <input type="date" className="w-full p-3 text-white border rounded-lg bg-black/30 border-white/20 focus:outline-none focus:border-yellow-500 [color-scheme:dark]" value={singleDate} onChange={(e) => setSingleDate(e.target.value)} />
                </div>
              )}

              <div>
                <label className="block mb-2 text-sm text-gray-200">সিঙ্গেল থাকার মূল কারণ কী মনে হয়?</label>
                <select className="w-full p-3 text-white border rounded-lg bg-black/40 border-white/20 focus:outline-none focus:border-yellow-500" value={q3} onChange={(e) => setQ3(e.target.value)}>
                  <option value="" disabled>{"একটি বেছে নিন..."}</option>
                  <option value="money">{"পকেটে কানাকড়িও নাই, আমি দেশের সার্টিফাইড ফইন্নি"}</option>
                  <option value="friendzone">{"সবাই 'ভাইয়া/আপু' বলে ফ্রেন্ডজোনের চিপায় ফেলে রাখছে"}</option>
                  <option value="ugly">{"চেহারা এতোই মাশাআল্লাহ যে, আয়না দেখলে নিজেই ভয় পাই"}</option>
                  <option value="sakht">{"আমি এতোটাই 'শক্ত', ক্রাশ মেসেজ দিলেও 'Hmm' রিপ্লাই দিই!"}</option>
                  <option value="syllabus">{"রিলেশনশিপ জিনিসটা আমার সিলেবাসের একদম বাইরে"}</option>
                  <option value="custom" className="font-bold text-yellow-400">{"অন্য কারণ (নিজে লিখব)"}</option>
                </select>
              </div>

              {q3 === 'custom' && (
                <div className="p-4 border rounded-lg bg-yellow-500/10 border-yellow-500/50 animate-fade-in-up">
                  <label className="block mb-2 text-sm text-yellow-300">আপনার সিঙ্গেল থাকার আসল কারণটি লিখুন:</label>
                  <textarea className="w-full p-3 text-white border rounded-lg bg-black/40 border-white/20 focus:outline-none focus:border-yellow-500" placeholder="যেমন: গার্লফ্রেন্ড পালার মতো বুকের পাটা নাই..." rows="2" value={customReason} onChange={(e) => setCustomReason(e.target.value)}></textarea>
                </div>
              )}

              <div>
                <label className="block mb-2 text-sm text-gray-200">আপনার প্রাক্তন (Ex) বা ক্রাশের বর্তমান অবস্থা কী?</label>
                <select className="w-full p-3 text-white border rounded-lg bg-black/40 border-white/20 focus:outline-none focus:border-yellow-500" value={q4} onChange={(e) => setQ4(e.target.value)}>
                  <option value="" disabled>{"একটি বেছে নিন..."}</option>
                  <option value="others">{"অন্য কারো ইনবক্সে 'বাবু খাইছো?' জিজ্ঞেস করতে ব্যস্ত"}</option>
                  <option value="fuchka">{"আমার টাকায় ফুচকা খেয়ে এখন অন্য কারো বউ/জামাই"}</option>
                  <option value="kids">{"তার ২-৩ টা বাচ্চাও হয়ে গেছে, আর আমি এখনো সিঙ্গেল"}</option>
                  <option value="noprem">{"ক্রাশ আবার কী? এটা কি শীতকালে ঠোঁটে মাখে?"}</option>
                  <option value="custom" className="font-bold text-yellow-400">{"অন্য অবস্থা (নিজে লিখব)"}</option>
                </select>
              </div>

              {q4 === 'custom' && (
                <div className="p-4 border rounded-lg bg-yellow-500/10 border-yellow-500/50 animate-fade-in-up mt-2">
                  <label className="block mb-2 text-sm text-yellow-300">তাহলে তার অবস্থা কী লিখুন:</label>
                  <textarea className="w-full p-3 text-white border rounded-lg bg-black/40 border-white/20 focus:outline-none focus:border-yellow-500" placeholder="যেমন: তার ২টা বাচ্চা হয়ে গেছে..." rows="2" value={q4Custom} onChange={(e) => setQ4Custom(e.target.value)}></textarea>
                </div>
              )}

              <div>
                <label className="block mb-2 text-sm text-gray-200">রাস্তায় কাপল দেখলে কেমন লাগে?</label>
                <select className="w-full p-3 text-white border rounded-lg bg-black/40 border-white/20 focus:outline-none focus:border-yellow-500" value={q2} onChange={(e) => setQ2(e.target.value)}>
                  <option value="" disabled>{"একটি বেছে নিন..."}</option>
                  <option value="breakup">{"মনে মনে বদদোয়া দিই, 'কয়দিন পরই তোদের ব্রেকআপ হবে'"}</option>
                  <option value="rickshaw">{"ইচ্ছা করে দৌড় দিয়ে ওদের দুজনের মাঝখান দিয়ে হেঁটে যাই"}</option>
                  <option value="cry">{"বুকটা ফাইট্টা যায়, হু হু করে কেঁদে দিই দুনিয়ার স্বার্থপরতা দেখে"}</option>
                  <option value="police">{"৯৯৯-এ কল করে পুলিশ ডেকে ধরিয়ে দেওয়ার তীব্র ইচ্ছা জাগে"}</option>
                  <option value="custom" className="font-bold text-yellow-400">{"অন্য ফিলিং (নিজে লিখব)"}</option>
                </select>
              </div>

              {q2 === 'custom' && (
                <div className="p-4 border rounded-lg bg-yellow-500/10 border-yellow-500/50 animate-fade-in-up mt-2">
                  <label className="block mb-2 text-sm text-yellow-300">কাপল দেখলে মনের আসল ফিলিংটা লিখুন:</label>
                  <textarea className="w-full p-3 text-white border rounded-lg bg-black/40 border-white/20 focus:outline-none focus:border-yellow-500" placeholder="যেমন: মন চায় ধইরা মাইর দিই..." rows="2" value={q2Custom} onChange={(e) => setQ2Custom(e.target.value)}></textarea>
                </div>
              )}

              <div className="pt-4 pb-2 border-b border-white/10">
                <label className="block mb-2 text-sm text-gray-200">আপনার সিঙ্গেল জীবনের হতাশা লেভেল (মিটার টানুন):</label>
                <input type="range" min="0" max="100" value={desperation} onChange={(e) => setDesperation(e.target.value)} className="w-full h-2 rounded-lg appearance-none bg-gray-700 accent-yellow-500 cursor-pointer" />
                <div className="text-center mt-3 text-sm font-extrabold text-red-400 drop-shadow-md animate-fade-in-up">
                  {getRoastText()}
                </div>
              </div>

              <div className="flex items-start p-3 bg-red-900/30 border border-red-500/50 rounded-lg mt-4">
                <input type="checkbox" id="oath" className="w-5 h-5 mt-1 text-red-500 rounded focus:ring-red-500 accent-red-600 cursor-pointer" checked={oath} onChange={(e) => setOath(e.target.checked)} />
                <label htmlFor="oath" className="ml-3 font-bold text-red-200 cursor-pointer text-sm">
                  আমি শপথ করছি যে, এই ক্রেস্ট পাওয়ার পর আমি বাথরুমে গিয়ে একা একা কাঁদব না!
                </label>
              </div>

              <button 
                onClick={handleGenerate}
                disabled={!name || (!isBornSingle && !singleDate) || (isBornSingle && !age) || !userImage || (q3 === 'custom' && !customReason) || (q2 === 'custom' && !q2Custom) || (q4 === 'custom' && !q4Custom) || !oath}
                className="w-full py-4 mt-6 font-extrabold tracking-wider text-black transition-all rounded-lg shadow-xl bg-gradient-to-r from-yellow-400 to-yellow-600 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {oath ? 'গোল্ডেন ক্রেস্ট তৈরি করুন ✨' : 'আগে শপথ করুন! 👆'}
              </button>
              
              <p className="text-sm sm:text-base font-extrabold text-center text-red-500 mt-4 px-2 drop-shadow-md">
                বি.দ্র: মিথ্যা তথ্য দিয়ে ক্রেস্ট বানালে জীবনেও বিয়ে হবে না বলে অভিশাপ দেওয়া হলো!
              </p>
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center w-full max-w-2xl animate-fade-in-up">
          
          <div 
            id="crest-design" 
            className="relative w-[380px] sm:w-[450px] p-4 sm:p-6 rounded-xl"
            style={{ backgroundColor: '#6b0000', border: '8px solid #b8860b' }} 
          >
            <div className="relative flex flex-col items-center p-6 text-center bg-[#facc15] rounded-sm" style={{ border: '4px solid #854d0e', backgroundImage: 'linear-gradient(to bottom right, #fef08a, #facc15, #ca8a04)' }}>
              
              <p className="mb-1 text-[10px] sm:text-xs font-bold tracking-widest text-yellow-900 uppercase">On Behalf Of</p>
              <h2 className="text-sm sm:text-base font-black tracking-widest text-black border-b-2 border-yellow-800 pb-2 mb-4">
                BANGLADESH SINGLE SOCIETY
              </h2>

              {userImage && (
                <div className="relative mb-4 mt-2">
                  <img src={userImage} alt="User" className="relative object-cover w-32 h-32 border-4 rounded-full border-yellow-700" style={{ boxShadow: '0 0 15px rgba(202, 138, 4, 1)' }} />
                </div>
              )}

              <p className="mb-2 text-xl sm:text-2xl font-bold text-red-800 mt-2" style={{ fontFamily: 'cursive' }}>{finalTitle}</p>
              
              <div className="w-full px-4 py-2 mb-4 bg-black rounded-sm" style={{ boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.5)' }}>
                <h1 className="text-2xl sm:text-3xl font-black text-yellow-400 uppercase" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                  {name}
                </h1>
              </div>
              
              <p className="mb-4 text-sm sm:text-base font-semibold leading-relaxed text-gray-900">
                <span className="font-bold text-red-700">{duration.text}</span> ধরে কেউ কোনো পাত্তা না দেওয়ায় এবং <span className="font-bold text-red-900">{getReasonText()}</span> অত্যন্ত বাধ্য হয়ে অবিরাম সিঙ্গেল জীবনযাপন করার এই করুণ পরিস্থিতির জন্য আপনাকে এই বিশেষ <span className="font-black text-red-800 underline decoration-wavy">শোকপ্রস্তাব (থুক্কু, সম্মাননা)</span> প্রদান করা হলো!
              </p>

              <div className="p-2 mb-6 border-2 border-red-500 bg-red-100 rounded text-xs sm:text-sm font-bold text-red-800 shadow-sm flex items-center justify-center gap-2">
                <span>📢</span>
                <span>{finalWarning}</span>
              </div>

              {/* একদম নতুন ফানি এবং প্রফেশনাল ফুটার (Footer) */}
              <div className="w-full flex items-end justify-between pt-6 border-t-2 border-yellow-800/40 mt-4">
                
                {/* Left Side: Sponsors */}
                <div className="text-left space-y-1.5">
                  <p className="text-[9px] font-extrabold tracking-widest text-yellow-900/80 uppercase">
                    Sponsored By:
                  </p>
                  <p className="text-[11px] sm:text-[13px] font-black text-red-900 leading-tight drop-shadow-sm">
                    "প্রেমে ব্যর্থ ও ছ্যাকা খাওয়া" ট্রাস্ট
                  </p>
                  <div className="flex items-center gap-1.5 pt-0.5">
                    <span className="text-[8px] font-bold px-1.5 py-0.5 bg-yellow-900/20 text-yellow-900 rounded-sm">
                      CO-SPONSOR
                    </span>
                    <span className="text-[9px] font-bold text-gray-900">
                      "শুধু অন্যের বিয়ের বিরিয়ানি খাইতে চাই" সংঘ
                    </span>
                  </div>
                </div>

                {/* Right Side: Signature */}
                <div className="flex flex-col items-center justify-end pl-2">
                  {/* Cursive Signature (ছ্যাঁকা খাইছি) */}
                  <div className="text-2xl sm:text-3xl text-red-900/80 font-[cursive] -mb-1 opacity-90 transform -rotate-3">
                    C. K. Khaisi
                  </div>
                  {/* Signature Line */}
                  <div className="w-32 border-b-[1.5px] border-black mt-2"></div>
                  {/* Dynamic Funny Signature Title */}
                  <p className="text-[8px] sm:text-[9px] font-extrabold text-gray-900 mt-1.5 text-center leading-tight">
                    {finalSignature}
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <button 
              onClick={() => setShowCrest(false)}
              className="px-6 py-3 font-bold text-white transition-all border border-white/30 bg-white/10 hover:bg-white/20 rounded-xl"
            >
              ← এডিট করুন
            </button>
            <button 
              onClick={handleDownload}
              className="px-8 py-3 font-bold text-black transition-all rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-600 hover:scale-105"
            >
              ডাউনলোড করুন 📥
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App