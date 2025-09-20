import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface TabState {
    tabState: number,
    toggleTabState: (index: number | 0) => void,
}

export const useTabStates = create<TabState>()(
    devtools(
        (set) => ({
            tabState: 0,
            toggleTabState: (index) => set({ tabState: index }),
        }),
        { name: 'tabStates' },
    ),
)