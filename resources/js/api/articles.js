/**
 * Imports the LvBlog API URL from the config.
 */
import { LVBLOG_CONFIG } from '../config.js';

export default {
    getArticles: function(page){
        return axios.get(LVBLOG_CONFIG.API_URL + '/articles'+'?page='+page ,{

        });
    },
    getUserArticles: function(user,page){

        return axios.get(LVBLOG_CONFIG.API_URL + '/users/'+user+'/articles'+'?page='+page ,{

        });
    },
    getUserTagArticles: function(tag,page){
        return axios.get(LVBLOG_CONFIG.API_URL + '/tags/'+tag+'/articles'+'?page='+page ,{

        });
    },
    getUserCategoryArticles: function(category,page){

        return axios.get(LVBLOG_CONFIG.API_URL + '/categories/'+category+'/articles'+'?page='+page ,{

        });
    },
    getArticle: function(art_id){
        return axios.get(LVBLOG_CONFIG.API_URL + '/articles/'+art_id,{

        });
    },
    postArticle: function(title,body,tags,category_id,excerpt,target){
        return axios.post(LVBLOG_CONFIG.API_URL + '/articles',{
            title:title,
            body:body,
            tags:tags,
            category_id:category_id,
            excerpt:excerpt,
            target:target,
        });
    }
}