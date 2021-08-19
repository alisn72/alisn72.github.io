import { EStorageKeys } from "../@types";

const StorageService = {
  set: (key: EStorageKeys, value: any) => {
    const correctValue = typeof value === 'string' ? value : JSON.stringify(value)
    localStorage.setItem(key, correctValue);
  },

  setMultiple: (items: { key: EStorageKeys, value: any }[]) => {
    items.forEach(item => StorageService.set(item.key, item.value))
  },

  remove: (key: EStorageKeys) => {
    localStorage.removeItem(key);
  },

  removeMultiple: (keys: EStorageKeys[]) => {
    keys.forEach(key => StorageService.remove(key))
  },

  get: (key: EStorageKeys, defaultValue: any = null): string | object | null => {
    const value = localStorage.getItem(key);
    if (!value) return defaultValue
    try {
      return JSON.parse(value)
    } catch (e) {
      return value
    }
  },

  getMultiple: (keys: EStorageKeys[]): (string | object | null)[] => {
    const res = keys.map(key => StorageService.get(key))
    return res
  },

}

export default StorageService
