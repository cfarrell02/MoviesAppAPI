import { db } from "../firebase-config";
import {collection, getDocs, addDoc, updateDoc, doc, deleteDoc} from 'firebase/firestore'

const favouriteCollectionRef = collection(db,'favourites');
const mustWatchCollectionRef = collection(db,'mustWatch');
const reviewCollectionRef = collection(db,'reviews');
const commentsCollectionRef = collection(db,'comments');
export const getFavourites =  async (email) => {
   // const favouriteCollectionRef = collection(db,'favourites')
   console.log("getFavourites")
    const data = await getDocs(favouriteCollectionRef);
    
    const movies = data.docs.map((doc) => ({...doc.data(), id: doc.id})).find((obj) => obj.userEmail === email)
    
    return movies
  }

  export const addNewFavourites = async (email) =>{

    await addDoc(favouriteCollectionRef, {userEmail:email,movies:[],shows:[]})
}

export const updateUserMovieFavourites = async (email,movies) =>{

    const obj = await getFavourites(email)
    const favouriteDoc = doc(db,"favourites",obj.id);
    await updateDoc(favouriteDoc, {movies:movies});
}

 export const updateUserShowFavourites = async (email,shows) =>{

     const obj = await getFavourites(email);
     const favouriteDoc = doc(db,"favourites",obj.id);
     await updateDoc(favouriteDoc, {shows:shows});
 }

 export const getMustWatch = async (email) => {

    const data = await getDocs(mustWatchCollectionRef);
    return data.docs.map((doc) => ({...doc.data(), id: doc.id})).find((obj) => obj.userEmail === email)
 }

 export const addNewMustWatch  = async (email) =>{

    await addDoc(mustWatchCollectionRef, {userEmail:email,movies:[]})
 }
 export const updateUserMustWatch = async (email, movies) => {

    const obj = await getMustWatch(email);
    const mustWatchDoc = doc(db,"mustWatch" , obj.id);
    await updateDoc(mustWatchDoc, {movies:movies})
 }
 export const addNewReviews = async (email) => {

    await addDoc(reviewCollectionRef , {userEmail:email,reviews:[]})
 }
 export const getReviews = async (email) =>{

    const data = await getDocs(reviewCollectionRef);
    return data.docs.map((doc) => ({...doc.data(), id: doc.id})).find((obj) => obj.userEmail === email)
 }
 export const getAllReviews = async () =>{

      const data = await getDocs(reviewCollectionRef);
    //  console.log('---')
      const result = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
      let temp = [];
      result.forEach((obj) => { temp.push(...obj.reviews)})
      return temp;
 }
 export const updateUserReview = async (email,reviews) =>{

    const obj = await getReviews(email);
    console.log(obj)
    const reviewDoc = doc(db,'reviews',obj.id);
    await updateDoc(reviewDoc, {reviews:reviews});
 }
 export const getAllComments = async () =>{

      const data = await getDocs(commentsCollectionRef);
      return data.docs.map((doc) => ({...doc.data(), id: doc.id}))
   }
export const addNewComment = async (comment) =>{

      await addDoc(commentsCollectionRef, {content:comment.content,email:comment.email,time:comment.time,creator:comment.creator})
   }
export const updateComments = async (comments) =>{
 
      const data = await getDocs(commentsCollectionRef);
      const commentDoc = doc(db,'comments',data.id);
      await updateDoc(commentDoc, {comments:comments});
   }
export const deleteComment = async (id) =>{

     const commentDoc = doc(db,'comments',id);
     await deleteDoc(commentDoc);
   }