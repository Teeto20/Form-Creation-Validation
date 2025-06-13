  // 1. Initialize the async function
  async function fetchUserData() {
    // 2. Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // 3. Select the data container element
    const dataContainer = document.getElementById('api-data');

    // 4. Fetch data using try-catch
    try {
      const response = await fetch(apiUrl); // Fetch the data

      // 5. Convert response to JSON
      const users = await response.json();

      // 6. Clear the loading message
      dataContainer.innerHTML = '';

      // 7. Create and append user list
      const userList = document.createElement('ul');

      users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = user.name;
        userList.appendChild(listItem);
      });

      dataContainer.appendChild(userList);

    } catch (error) {
      // 8. Handle fetch errors
      dataContainer.innerHTML = '';
      dataContainer.textContent = 'Failed to load user data.';
      console.error('Error fetching user data:', error);
    }
  }

  // 9. Invoke on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', fetchUserData);
