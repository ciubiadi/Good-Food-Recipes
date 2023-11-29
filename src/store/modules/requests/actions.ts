export default {
    async fetchRequests(context: any) {
        const coachId = context.rootGetters.userId;
        const response = await fetch(`https://vuemealsandcooks-default-rtdb.europe-west1.firebasedatabase.app/requests/${coachId}.json`);
        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to fetch requests.');
            throw error;
        }

        const requests = [];

        for (const key in responseData) {
            const request = {
            id: key,
            coachId: coachId,
            userEmail: responseData[key].userEmail,
            message: responseData[key].message
            };
            requests.push(request);
        }

        context.commit('setRequests', requests);
    },

    async contactCoach(context: any, payload: any) {
        const newRequest = {
          id: null,
          userEmail: payload.email,
          message: payload.message,
          coachId: null
        };
        const response = await fetch(`https://vuemealsandcooks-default-rtdb.europe-west1.firebasedatabase.app/requests/${payload.coachId}.json`, {
          method: 'POST',
          body: JSON.stringify(newRequest)
        });
    
        const responseData = await response.json();
    
        if (!response.ok) {
          const error = new Error(responseData.message || 'Failed to send request.');
          throw error;
        }
    
        newRequest.id = responseData.name;
        newRequest.coachId = payload.coachId;
    
        context.commit('addRequest', newRequest);
    },
};