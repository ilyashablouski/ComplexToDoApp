export interface IListItemsPayload {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}

export function getListItemsJson(): Promise<IListItemsPayload[]> {
  const listUrl = 'https://jsonplaceholder.typicode.com/todos';
  return sendRequest('GET', listUrl);
}

async function sendRequest(
  method: 'GET' | 'POST',
  url: string,
  payload: null | {} = null,
) {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json;charset=UTF-8',
  };

  try {
    const response = await fetch(url, {
      method: method,
      body: payload ? JSON.stringify(payload) : null,
      headers: headers,
    });
    /*We should handle response from server with ok(200-299) &
     !ok(>299) status here*/
    const json = await response.json();
    if (!response.ok) {
      throw new Error(
        `API request failed with status code: ${response.status}`,
      );
    }
    return json;
  } catch (error) {
    /*We should handle other network error here*/
    // @ts-ignore
    throw new Error(error);
  }
}
