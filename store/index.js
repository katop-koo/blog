import defaultEyeCatch from '~/assets/images/defaultEyeCatch.png'

// 追記
//export const state = () => ({
//  posts: []
//})

export const getters = {
//	// 追記
//    linkTo: () => (name, obj) => {
//console.log("link to"+obj)
//        return { name: `${name}-slug`, params: { slug: obj.fields.slug } }
//      },
        setEyeCatch: () => (post) => {
        if (!!post.fields.image && !!post.fields.image.fields) return { url: `https:${post.fields.image.fields.file.url}`, title: post.fields.image.fields.title }
        else return { url: defaultEyeCatch, title: 'defaultImage' }
    }
}
