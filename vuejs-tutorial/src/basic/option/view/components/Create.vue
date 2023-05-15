<template>
 <div class="card">
          <div class="card-body">
               <form>
                    <div class="form-group">
                        <label for="category">Category select</label>
                        <select class="form-control" id="category">
                        <option>men's clothing</option>
                        <option>women's clothing</option>
                        <option>jewelery</option>
                        <option>electronics</option>
                        </select>
                    </div>
                        
                    <div class="form-group">
                        <label for="des">Description</label>
                        <textarea class="form-control" id="des" rows="3"></textarea>
                    </div>

                    <div class="form-group">
                        <label for="price">Price</label>
                        <input type="text" class="form-control" id="price" placeholder="Enter Name">
                    </div>
                    <div class="form-group">
                        <label for="image">Image</label>
                        <input type="text" class="form-control" id="image" placeholder="Enter Name">
                    </div>
                    <div class="form-group">
                        <label for="title">Title</label>
                        <input type="text" class="form-control" id="title" placeholder="Enter Name">
                    </div>
                    <div class="form-group row">
                        <div class="col-6">
                            <label for="rate">Rate</label>
                            <input type="text" class="form-control" id="rate" placeholder="Enter Name">
                        </div>
                        <div class="col-6">
                            <label for="count">Count</label>
                            <input type="text" class="form-control" id="count" placeholder="Enter Name">
                        </div>
                       
                    </div>
              
                    <div class="d-flex my-2">
                       <button type="submit" class="btn btn-sm btn-primary">Create</button>
                    </div>
                </form>
                
          </div>
     </div>
</template>
<script>
export default {
  name:'create-app'
}
</script>