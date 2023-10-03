import { DragEvent, FC } from "react"
import { Entry } from "@/interfaces"
import { Card, CardActionArea, CardActions, CardContent, Typography } from "@mui/material"

interface Props{
    entry:Entry
}

export const EntryCard:FC<Props> = ({ entry }) => {

    const onDragStart = (event:DragEvent) =>{
        event.dataTransfer.setData('text',entry._id);

        //TODO: modificar el estado, para indicar que estoy haciendo drag
    }

    const onDragEnd = () =>{
        //TODO: cancelar el drag
    }

  return (
    <Card
        sx={{marginBottom:1}}
        //Eventos de drag
        draggable
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
    >
        <CardActionArea>
            <CardContent>
                <Typography sx={{whiteSpace:'pre-line'}}>{entry.description}</Typography>
            </CardContent>
            <CardActions sx={{display:'flex', justifyContent:'end',paddingRight:2}}>
                <Typography variant="body2">Hace 30 min</Typography>
            </CardActions>
        </CardActionArea>
    </Card>
  )
}
