export const SET_SELECTED_BENEFIT = 'SET_SELECTED_BENEFIT'

export function setSelectedBenefit(benefit) {
  return {
    type: SET_SELECTED_BENEFIT,
    benefit
  }
}