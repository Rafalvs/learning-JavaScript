document.addEventListener("DOMContentLoaded", function()
{
    const board = document.getElementById("board");
    
    const columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  
    for (let i = 0; i < 8; i++)
    {
      for (let j = 0; j < 8; j++)
      {
        const cell = document.createElement("div");
        cell.classList.add("cell");

        const columnLabel = columns[j]; // Get the column label
        const rowLabel = 8 - i; // Get the row label (reversed because the board starts from the bottom)
        const squareId = columnLabel + rowLabel; // Concatenate column label and row label
        cell.id = squareId; // Set the ID of the cell

        if ((i + j) % 2 === 0)
        {
          cell.classList.add("white");
        }

        else
        {
          cell.classList.add("black");
        }
        board.appendChild(cell);
      }
    }

    

  });
  