import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const ShowSchema = new Schema({
  adult: { type: Boolean },
  id: { type: Number, required: true, unique: true },
  poster_path: { type: String },
  overview: { type: String },
  first_air_date: { type: String },
  original_name: { type: String },
  genre_ids: [{ type: Number }],
  original_language: { type: String },
  name: { type: String },
  backdrop_path: { type: String },
  popularity: { type: Number },
  vote_count: { type: Number },
  vote_average: { type: Number },
  origin_country: [{
    iso_3166_1: { type: String },
    name: { type: String }
  }],
  runtime: { type: Number },
  spoken_languages: [{
    iso_639_1: { type: String },
    name: { type: String }
  }]
});

ShowSchema.statics.findByShowDBId = function (id) {
  return this.findOne({id });
};

export default mongoose.model('Shows', ShowSchema);
