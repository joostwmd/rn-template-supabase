import AsyncStorage from "@react-native-async-storage/async-storage"

class Storage {
  async getItem(key: string) {
    return await AsyncStorage.getItem(key)
  }
  async removeItem(key: string) {
    return await AsyncStorage.removeItem(key)
  }
  async setItem(key: string, value: string) {
    return await AsyncStorage.setItem(key, value)
  }
}

export const DeviceStorage = new Storage()
