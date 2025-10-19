import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface TabState {
    tabState: number,
    toggleTabState: (index: number | 0) => void,
}

interface ModalState {
    modalState: boolean,
    indexState: boolean,
    dirtectoryModalState: boolean,
    modalData: any,
    directoryModalData: any,
    indexModalData: any,
    toggleModalState: (state: boolean) => void,
    toggleIndexState: (state: boolean) => void,
    toggleDirtectoryModalState: (state: boolean) => void,
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
            dirtectoryModalState: false,
            indexState: false,
            modalData: null,
            directoryModalData: null,
            indexModalData: null,
            toggleModalState: (state) => set({ modalState: !state }),
            toggleIndexState: (state) => set({ indexState: !state }),
            toggleDirtectoryModalState: (state) => set({ dirtectoryModalState: !state }),
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