import { create } from "zustand"

interface QueryStore {
  user?: string;
  setUser: (user: string) => void;
  resetUser: () => void;

  referralCode: string;
  setReferralCode: (code: string) => void;

  reload: boolean;
  setReload: () => void;
}

const LOCAL_STORAGE_USER_KEY = "zustand_user";

const useQueryStore = create<QueryStore>((set) => {
  const savedUser = localStorage.getItem(LOCAL_STORAGE_USER_KEY);
  const initialUser = savedUser ? JSON.parse(savedUser) : undefined;

  return {
    user: initialUser,
    setUser: (user) => { set(() => ({ user: user })); localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(user)); },
    resetUser: () => { set(() => ({ user: undefined })); localStorage.removeItem(LOCAL_STORAGE_USER_KEY); },

    referralCode: "",
    setReferralCode: (code) => set(() => ({ referralCode: code })),

    reload: false,
    setReload: () => set((store) => ({ reload: !store.reload })),
  };
});

export default useQueryStore;
