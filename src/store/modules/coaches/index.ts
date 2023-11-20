import mutations from './mutations.ts';
import actions from './actions.ts';
import getters from './getters.ts';
// import { ICoach } from '../../../utils/types.ts';

export default {
  namespaced: true,
  state() {
    return {
      coaches: [
        {
          id: 'c1',
          firstName: 'Adrian',
          lastName: 'Ciubucciu',
          areas: ['Mexican', 'Vegan', 'Chinese'],
          description:
            "I'm Adrian and I've worked as a cook for 10 years. Let me help you become a cook as well!",
          hourlyRate: 30
        },
        {
          id: 'c2',
          firstName: 'Cristian',
          lastName: 'Jones',
          areas: ['Vegan', 'Indian'],
          description:
            'I am Julie and as a senior cook with 10+ years experience, I can help you get your first job or progress in your current role.',
          hourlyRate: 30
        }
      ]
    };
  },
  mutations,
  actions,
  getters
};