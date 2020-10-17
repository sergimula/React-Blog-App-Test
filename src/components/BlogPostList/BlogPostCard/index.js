import React from 'react'
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core'
import PropTypes from 'prop-types'

import styles from './styles'

const useStyles = makeStyles(styles)

const BlogPostCard = (props) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Grid container>
          <Grid item xs={6}>
            <CardMedia
              component='img'
              alt={props.title}
              height='140'
              image={props.imageUrl}
              title={props.title}
            />
          </Grid>
          <Grid item xs={6}>
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                {props.title}
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                {props.description}
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </CardActionArea>
    </Card>
  )
}

BlogPostCard.propTypes = {
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  title: PropTypes.string,
}

export default BlogPostCard
