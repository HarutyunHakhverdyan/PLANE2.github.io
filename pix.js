const app= new PIXI.Application({
  background: '01FFBF',
  width:800,
  height:400
})
document.body.appendChild(app.view)
const container= new PIXI.Container()
container.width=300
app.stage.addChild(container)
const arr=[]
let cond1=1
let num=0
let d=0
class Plane{
  constructor(arg){
      this.texture = PIXI.Texture.from('https://cdn-icons-png.flaticon.com/512/2685/2685659.png');
      this.sprite= new PIXI.Sprite(this.texture)
      this.sprite.scale.x *=0.15 ;
      this.sprite.scale.y *= 0.15;
      this.sprite.y=150
      this.sprite.x=-80
      this.sprite.interactive = true; 
      this.sprite.buttonMode = true;
      this.sprite.anchor.set(0)
      this.onClick=()=>{
            d=0
            condition1=1
        num=arr.indexOf(this)
        if(cond1){
            num=0
            let cond2=1
        app.ticker.add(()=>{
          if(cond2){
            if(this.sprite.y>-110&&this.sprite.x!=-80){
                cond1=0
                d=2
                this.sprite.y-=6
             }else{
              cond2=0
              cond1=1
              t=0
             }
            }
           num=arr.indexOf(this)
         })    
        }
      }
      this.addChild=()=>{
          this.sprite.on('click', this.onClick) 
          this.sprite.on('tap',this.onClick)
          container.addChild(this.sprite)
      }
   }
}
for(let i=0;i<20;i++){
let plane=new Plane()
plane.addChild()
 arr.push(plane)
}
app.ticker.add(()=>{
arr[0].sprite.x+=1
})
app.ticker.add(()=>{
for(let i=0;i<arr.length-1;i++){
  if(arr[i].sprite.x>0){
      arr[i+1].sprite.x+=1
      arr[i].sprite.scale.y*=1.0015
      arr[i].sprite.scale.x*=1.0015
      arr[i].sprite.x*=1.0015
      arr[i].sprite.y-=0.1
   }
 }
 if(arr[arr.length-1].sprite.x!=-80){
  let planeRotation=arr.shift()
  planeRotation.sprite.x=-80
  planeRotation.sprite.y=150
  planeRotation.sprite.scale.x=0.15
  planeRotation.sprite.scale.y=0.15
  arr.push(planeRotation)
 }
}) 
let condition1=1
let t=0
app.ticker.add(()=>{
  if(!condition1){
    d=0
    
  }
    if(d){
       for(let i=num+1;i<arr.length;i++){
              if(arr[i].sprite.x>-80){
              if(arr[num+1].sprite.x<=arr[num].sprite.x){
                  arr[i].sprite.x+=d
                  arr[i].sprite.scale.y*=1.003
                  arr[i].sprite.scale.x*=1.003
                  arr[i].sprite.x*=1.003
                  arr[i].sprite.y-=0.2
                  
                }else{
                  ++t
                  if(t==1){
                    if(num){
                    arr[num].sprite.x=arr[num-1].sprite.x
                     let k
                     for(let j=arr.length-1;j>=0;j--){
                          if(j>num){
                            arr[j]=arr[j]
                          }else{
                            if(j==num){
                              k=arr[num]
                            }
                            if(j>0){
                              arr[j]=arr[j-1]
                            }else{
                              arr[j]=k
                            }
                          }
                       }                    
                    } 
                  }
                  condition1=0
                 }
               }
             }
         }  
    })

