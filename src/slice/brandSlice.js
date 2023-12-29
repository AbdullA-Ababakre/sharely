import { createSlice } from "@reduxjs/toolkit";
import lightspaceImg from "../assets/lightspace.png";
import musicfyImg from "../assets/musicfy.png";
import myAiClone from "../assets/myaiclone.png";
import Sourcely from "../assets/sourcely.png";
const sampleRules = [
  "Add hashtag #sharely to the caption.",
  "Product must be the focus of your video.",
  "No promoting referral codes. No tagging other brands.",
];
const sampleNotes =
  "Share your experience/results with the product. Talking to the camera or including a voiceover often performs better. Include a short, engaging hook at the beginning of your video to get more views. Be sure to film in a well-lit area and make sure people can clearly hear you. Be authentic and avoid using filters. Try to keep the product in frame for a majority of the video.";

const brands = {
  1: {
    id: 1,
    title: "Lightspace",
    productLink: "https://lightspaceai.com/",
    desc: "Upload your selfies and receive stunning headshots in minutes",
    rules: sampleRules,
    notes: sampleNotes,
    imageSrc: lightspaceImg,
  },
  2: {
    id: 2,
    title: "Musicfy",
    productLink: "https://musicfy.lol/",
    desc: "Use AI to create music with your voice or other voices and make music like never before.",
    rules: sampleRules,
    notes: sampleNotes,
    imageSrc: musicfyImg,
  },
  3: {
    id: 3,
    title: "MyAiClone",
    productLink: "https://www.myaiclone.co/",
    desc: "Automate your sales conversations and reach more customers with an AI clone chatbot that works 24/7/365 on any platform. Ideal for solopreneurs, sales reps, coaches, and other professionals.",
    rules: sampleRules,
    notes: sampleNotes,
    imageSrc: myAiClone,
  },
  4: {
    id: 4,
    title: "Sourcely",
    productLink: "https://www.sourcely.net/",
    desc: "Finish Your Research in Minutes. Save Your Sleep. Paste your essay to find, summarize, and add credible sources. (That's something Google Scholar can't do!)",
    rules: sampleRules,
    notes: sampleNotes,
    imageSrc: Sourcely,
  },
};
const activeBrands = [1, 2, 3, 4];
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
  console.log(_select(state).activeBrands, "sooooo");
  const activeBrands = _select(state).activeBrands;
  const brands = selectBrands(state);
  return activeBrands?.map((id) => brands[id]);
};

export const { setCurrentBrand } = brandSlice.actions;

export default brandSlice.reducer;
