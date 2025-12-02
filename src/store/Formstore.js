import { create } from "zustand";

const useFormStore = create((set) => ({
  step: 0,
  values: {
    sandwichName: "",
    hasBread: false,
    hasLettuce: false,
    hasTomato: false,
    hasCheese: false,
    hasTopBread: false,
    hasFork: false,
  },

  setStep: (s) => set({ step: s }),

  setValue: (field, value) =>
    set((state) => ({ values: { ...state.values, [field]: value } })),

  reset: () => set({ step: 0, values: {} }),
}));

export default useFormStore;
