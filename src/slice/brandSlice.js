import { createSlice } from "@reduxjs/toolkit";
import lightspaceImg from "../assets/lightspace.png";
import musicfyImg from "../assets/musicfy.png";
import Sourcely from "../assets/sourcely.png";
import DreamMore from "../assets/dreammore.png";

const brands = {
  0: {
    id: 0,
    title: "Lightspace",
    productLink: "https://lightspaceai.com/",
    desc: "Turn your selfies into studio-quality AI headshots",
    rules: [
      "Add hashtag #lightspace to the caption",
      "get paid based on the engagement of the content after 48 hours",
    ],
    notes: ["Focus on the product", "Creator must be US based"],
    imageSrc: lightspaceImg,
    bounty: ["$20 for 1000 views "],
  },
  1: {
    id: 1,
    title: "Test Pilot Pro",
    productLink: "https://testpilotpro.ai/",
    desc: "Realiza exámenes de AESA y aprueba la licencia PPL",
    rules: [
      "Add hashtag #TestPilot to the caption",
      "get paid based on the engagement of the content after 48 hours",
    ],
    notes: ["Focus on the product"],
    imageSrc: musicfyImg,
    bounty: ["10$ cash for 1000 views,10$ is the limit"],
  },
  2: {
    id: 2,
    title: "Sourcely",
    productLink: "https://www.sourcely.net/",
    desc: "Finish Your Research in Minutes. Save Your Sleep. Paste your essay to find, summarize, and add credible sources. (That's something Google Scholar can't do!)",
    rules: [
      "Add hashtag #sourcely to the caption",
      "get paid based on the engagement of the content after 48 hours",
    ],
    notes: [
      "Focus on the product",
      "Great lighting + clear audio",
      "Clearly show Product's logo && website link",
      "You can use sourcely instagram or jenni ai Tiktok as examples",
    ],
    imageSrc: Sourcely,
    bounty: [
      "Will be given an affiliate link and get 20-50% of profits per paying user",
      "2500 views/ $10, over 10,000 views,get $50- upper limit ",
    ],
  },
  3: {
    id: 3,
    title: "Dreamore AI",
    productLink: "https://apps.apple.com/au/app/dreamore-ai/id6447442484",
    desc: "With Dreamore, you can record your dreams and receive personalized interpretations based on your unique experiences. The app uses advanced analysis algorithms to help you understand the hidden meanings behind your dreams, giving you insight into your subconscious mind. sFollow us on TickTok @dreamore.app",
    rules: [
      "Must tag #Dreammore to the caption and @ dreamore.app tiktok account",
      "get paid based on the engagement of the content after 24 hours",
    ],
    notes: [
      "Focus on the product",
      "Great lighting + clear audio",
      "Clearly show Product's logo && website link",
      "Sample video: https://www.tiktok.com/@dreamore.app/video/7310753392719072555?_r=1&_t=8iKEY66ZQqM",
      "Sample video: https://www.tiktok.com/@cocochen24/photo/7311957365652262186?is_from_webapp=1&web_id=7303775259357300255",
    ],
    imageSrc: DreamMore,
    bounty: [
      "$2 cash for 1 download",
      "$20 per 1000 views, capped at $2000 per 1M views.",
    ],
  },
  4: {
    id: 3,
    title: "InfoTap",
    productLink: "https://www.tiktok.com/@infotap_official",
    desc: "The most fastest and easiest way to connect and make friends",
    rules: [
      "1. Email abdullaszu@gmail.com to purchase the product at a discount. Include your contact details and product preferences.",
      "2.After the product is shipped and delivered to your address, create and share videos showcasing its features and use.",
      "Before you post : Must tag #infotap to the caption and @ infotap tiktok account",
      "After you post: get paid based on the engagement of the content after 24 hours",
    ],
    notes: [
      "Focus on the product",
      "Great lighting + clear audio",
      "Clearly show Product's logo && website link",
      "Sample video: https://www.tiktok.com/@infotap_official/video/7321139821202754862",
      "Sample video: https://www.tiktok.com/@infotap_official/video/7323081037393726762",
    ],
    imageSrc: "https://s11.ax1x.com/2024/01/19/pFAR3lj.jpg",
    bounty: [
      "$20 per 1000 views, capped at $2000 per 1M views.",
    ],
  },
};

const activeBrands = [0, 1, 2, 3,4];
export const brandSliceKey = "brand";
export const brandSlice = createSlice({
  name: brandSliceKey,
  initialState: {
    currentBrand: 0,
    brands,
    activeBrands,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    setCurrentBrand: (state, action) => {
      state.currentBrand = action.payload;
    },
  },
});

export const _select = (state) => state[brandSliceKey];

export const selectCurrentBrandId = (state) => _select(state).currentBrand;

export const selectCurrentBrand = (state) =>
  _select(state).brands[selectCurrentBrandId(state)];

export const selectBrands = (state) => _select(state).brands;

export const selectActiveBrands = (state) => {
  const activeBrands = _select(state).activeBrands;
  const brands = selectBrands(state);
  return activeBrands?.map((id) => brands[id]);
};

export const { setCurrentBrand } = brandSlice.actions;

export default brandSlice.reducer;
