export interface Student {
  name: string
  age: number
  gender: 'Male' | 'Female' | 'Other'
  address: string
  subjects: []
  hobbies?: []
}