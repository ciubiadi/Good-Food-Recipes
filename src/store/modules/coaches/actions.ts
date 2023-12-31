export default {
    async loadCoaches(context : any, payload: any) {
        if (!payload.forceRefresh && !context.getters.shouldUpdate) {
            return;
        }

        const response = await fetch(
            `https://vuemealsandcooks-default-rtdb.europe-west1.firebasedatabase.app/coaches.json`
        );
        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to fetch!');
            throw error;
        }

        const coaches = [];

        for (const key in responseData) {
            const coach = {
              id: key,
              firstName: responseData[key].firstName,
              lastName: responseData[key].lastName,
              description: responseData[key].description,
              hourlyRate: responseData[key].hourlyRate,
              areas: responseData[key].areas
            };
            coaches.push(coach);
        }

        context.commit('setCoaches', coaches);
        context.commit('setFetchTimestamp');
    },
    
    async registerCoach(context: any, data: any) {
      // const userId = Date.now().toString(36) + Math.random().toString(36).substr(2)
      const userId = context.rootGetters.userId;
      
      const coachData = {
        firstName: data.first,
        lastName: data.last,
        description: data.desc,
        hourlyRate: data.rate,
        areas: data.areas
      };
      
      const token = context.rootGetters.token;

      const response = await fetch(
        `https://vuemealsandcooks-default-rtdb.europe-west1.firebasedatabase.app/coaches/${userId}.json?auth=` +
          token,
        {
          method: 'PUT',
          body: JSON.stringify(coachData)
        }
      );
  
      // const responseData = await response.json();
  
      if (!response.ok) {
        console.log('error!!', response);
      }
  
      context.commit('registerCoach', {
        ...coachData,
        id: userId
      });
    },
};