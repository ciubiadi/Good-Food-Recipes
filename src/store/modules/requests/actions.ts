import { ActionContext } from 'vuex';

interface RequestPayload {
  email: string;
  message: string;
  coachId: string;
}

interface NewRequest {
  userEmail: string;
  message: string;
  id?: string; // Optional, since it's added later
  coachId?: string; // Optional, since it's added later
}

interface ResponseData {
  name: string; // Assuming this is the ID returned from the server
  // Add other properties if needed
}

const actions = {
  async contactCoach(context: ActionContext<any, any>, payload: RequestPayload): Promise<void> {
    const newRequest: NewRequest = {
      userEmail: payload.email,
      message: payload.message,
    };

    const response = await fetch(
      `https://vuemealsandcooks-default-rtdb.europe-west1.firebasedatabase.app/requests/${payload.coachId}.json`,
      {
        method: 'POST',
        body: JSON.stringify(newRequest),
      }
    );

    const responseData: ResponseData = await response.json();
    if (!response.ok) {
      const error = new Error(responseData.name || 'Failed to send request.');
      throw error;
    }

    newRequest.id = responseData.name;
    newRequest.coachId = payload.coachId;

    context.commit('addRequest', newRequest);
  },
  async fetchRequests(context: ActionContext<any, any>): Promise<void> {
    const coachId = context.rootGetters.userId;
    const token = context.rootGetters.token;

    const response = await fetch(
      `https://vuemealsandcooks-default-rtdb.europe-west1.firebasedatabase.app/requests/${coachId}.json?auth=` +
        token
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || 'Failed to fetch requests.'
      );
      throw error;
    }

    const requests: NewRequest[] = [];

    for (const key in responseData) {
      const request: NewRequest = {
        id: key,
        coachId: coachId,
        userEmail: responseData[key].userEmail,
        message: responseData[key].message,
      };
      requests.push(request);
    }

    context.commit('setRequests', requests);
  },
};

export default actions;
