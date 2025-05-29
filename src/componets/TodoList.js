import * as React from 'react';
import { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Grid from '@mui/material/Grid';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';


function TodoList() {
  const [task, setTasks] = useState("");
  const [descr, setDescrs] = useState("");
  const [selectedCard, setSelectedCard] = React.useState(0);
  const [arr, setArr] = useState([]);

  function clickHandler() {
    if (!task.trim() && !descr.trim()) {
      return;
    }
    setArr([...arr, { title: task, description: descr }]);
    setTasks("");
    setDescrs("");
  }

  return (
    <div style={{ marginBottom: 30 }}>
      <TextField
        onChange={(e) => setTasks(e.target.value)}
        value={task}
        id="outlined-basic"
        label="Название задачи"
        variant="outlined"
      />
      <TextField
        onChange={(e) => setDescrs(e.target.value)}
        value={descr}
        id="outlined-basic"
        label="Описание задачи"
        variant="outlined"
      />
      <Button
        onClick={clickHandler}
        variant="contained"
        style={{ marginBottom: 20 }}
      >
        добавить задачу
      </Button>
      <h2>СПИСОК ЗАДАЧ</h2>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        <li>
          <Box
            sx={{
              width: '100%',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(200px, 100%), 1fr))',
              gap: 2,
            }}
          >
            {arr.map((card, index) => (
              <Card key={index} sx={{ position: 'relative' }}>
                <CardActionArea
                  onClick={() => setSelectedCard(index)}
                  data-active={selectedCard === index ? '' : undefined}
                  sx={{
                    height: '100%',
                    '&[data-active]': {
                      backgroundColor: 'action.selected',
                      '&:hover': {
                        backgroundColor: 'action.selectedHover',
                      },
                    },
                  }}
                >
                  <CardContent sx={{ height: '100%', position: 'relative' }}>
                    <Box
                      sx={{
                        flexGrow: 1,
                        position: 'absolute',
                        top: 8,
                        right: 8,
                        zIndex: 1,
                        cursor: 'pointer',
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setArr(arr.filter((_, i) => i !== index));
                      }}
                    >
                      <Grid container sx={{ color: 'text.primary' }}></Grid>
                      <DeleteTwoToneIcon />
                    </Box>
                    <Typography variant="h5" component="div">
                      {card.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {card.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </Box>
        </li>
      </ul>
    </div >
  );
}

export default TodoList;