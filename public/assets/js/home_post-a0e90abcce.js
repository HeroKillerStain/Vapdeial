{let e=function(){let e=$("#new-post-form");e.submit((function(o){o.preventDefault(),$.ajax({type:"post",url:"/post/create-post",data:e.serialize(),success:function(e){let o=t(e.data.post);$("#posts-list-container>ul").prepend(o),new PostComments(e.data.post._id),n($(" .delete-button",o)),new ToggleLike($(" .toggle-like-button",o)),new Noty({theme:"relax",text:"Post published!",type:"success",layout:"topRight",timeout:1500}).show()},error:function(e){console.log(e.responseText)}})}))},t=function(e){return $(`\n        <li id="post-${e._id}" >\n        <p class="post-box">\n    \n            <div id="head">\n    \n                <small>\n                        ${e.user.name}\n                </small>\n    \n                \n                <a class="delete-button" href="/post/destroy/${e._id}">\n                    Delete\n                </a>\n                \n    \n            </div>\n                \n            <div id="content" style="border: 2px solid #000; margin: 4px; height: 5rem; width: 13rem; border-radius: 41px; text-align: center; overflow: hidden;">\n                <p>\n                ${e.content}\n                </p>\n            </div>\n    \n            <small id="like-comment">\n               \n                    <a class="toggle-like-button" data-likes="${e.likes.length} " href="/like/toggle/?id=${e._id}&type=Post">\n                        ${e.likes.length} Likes\n                    </a>\n                \n                    \n                \n    \n            </small>\n            \n                <form id="comment-form-${e._id}" action="/comment/create-comment" method="post">\n                    <input type="text" name="content" placeholder="Type Here to add comment..." required>\n                    <input type="hidden" name="post" value="${e._id}" >\n                    <input type="submit" value="Add Comment">\n                </form>\n            \n        </p>\n    \n        \n            \n    \n            <div class="post-comments-list">\n                <ul id="post-comments-${e._id}">\n                    \n                </ul>\n            </div>\n        \n        \n    </li>`)},n=function(e){$(e).click((function(t){t.preventDefault(),$.ajax({type:"get",url:$(e).prop("href"),success:function(e){$(`#post-${e.data.post_id}`).remove(),new Noty({theme:"relax",text:"Post Deleted",type:"success",layout:"topRight",timeout:1500}).show()},error:function(e){console.log(e.responseText)}})}))},o=function(){$("#posts-list-container>ul>li").each((function(){let e=$(this),t=$(" .delete-button",e);n(t);let o=e.prop("id").split("-")[1];new PostComments(o)}))};e(),o()}