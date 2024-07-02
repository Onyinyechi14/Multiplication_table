
// function multiplicationTable (num) {
//     const resultsContainer = document.getElementById('results-container')
//     resultsContainer.innerHTML = '' // clear the container

    

//     for(let i = 1; i <= 12; i++){
//         let result = num * i;

//         const resultHTML = `
//           <p>
//             <span>${num}</span> x <span>${i}</span> = <span>${result}</span>
//           </p>
//         `
//         resultsContainer.innerHTML += resultHTML
//     }
// }
// multiplicationTable(4)



        function generateMultiplicationTables() {
            const resultsContainer = document.getElementById('results-container');
            resultsContainer.innerHTML = ''; // Clear the container

            for (let num = 2; num <= 12; num++) {
                // Create a table container for each number
                const tableContainer = document.createElement('div');
                tableContainer.innerHTML = `<h3>Multiplication Table for ${num}</h3>`;

                for (let i = 1; i <= 12; i++) {
                    let result = num * i;

                    const resultHTML = `
                      <p>
                        <span>${num}</span> x <span>${i}</span> = <span>${result}</span>
                      </p>
                    `;
                    tableContainer.innerHTML += resultHTML;
                }

                // Append the table container to the results container
                resultsContainer.appendChild(tableContainer);
            }
        }

        // Call the function to generate the tables when the page loads
        window.onload = generateMultiplicationTables;
    