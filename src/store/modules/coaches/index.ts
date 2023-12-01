import mutations from './mutations.ts';
import actions from './actions.ts';
import getters from './getters.ts';

export default {
  namespaced: true,
  state() {
    return {
      coaches: [
        {
          id: 'c1',
          firstName: 'Robert',
          lastName: 'Jonas',
          areas: ['Mexican', 'Vegan', 'Indian'],
          description:
            "I'm Robert and I've worked as a cook for 10 years. Let me help you become a cook as well!",
          hourlyRate: 30
        },
        {
          id: 'c2',
          firstName: 'Cristian',
          lastName: 'Jones',
          areas: ['Vegan', 'Indian'],
          description:
            'I am Julie and as a senior cook with 10+ years experience, I can help you get your first job or progress in your current role.',
          hourlyRate: 20
        }
      ]
    };
  },
  mutations,
  actions,
  getters
};