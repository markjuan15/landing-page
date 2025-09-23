import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

interface TabState {
    tabState: number,
    toggleTabState: (index: number | 0) => void,
}

interface ModalState {
    modalState: boolean,
    modalData: any,
    toggleModalState: (state: boolean) => void,
}

interface Theme {
    themeState: boolean,
    toggleThemeState: (state: boolean) => void,
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

export const useModalStates = create<ModalState>()(
    devtools(
        (set) => ({
            modalState: false,
            modalData: null,
            toggleModalState: (state) => set({ modalState: !state }),
        }),
        { name: 'modalStates' },
    ),
)

export const useTheme = create<Theme>()(
    persist(
        (set) => ({
            themeState: false,
            toggleThemeState: (state) => set({ themeState: !state }),
        }),
        {
            name: 'themeState',
        },
    ),
)