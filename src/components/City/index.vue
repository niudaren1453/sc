<template>
   <div class="city">
                <div class="city_list">
                    <div class="wrapper">
                        <div>
                            <div class="city_hot">
                                <h2>热门城市</h2>
                                <ul class="clearfix">
                                    <li>北京</li>
                                    <li>上海</li>
                                    <li>广州</li>
                                    <li>南京</li>
                                    <li>杭州</li>
                                    <li>重庆</li>
                                    <li>武汉</li>
                                    <li>天津</li>
                                    <li>成都</li>
                                </ul>
                            </div>
                            <div class="city_sort">
                                <div>
                                    <h2>A </h2>
                                    <ul>
                                        <li>AA</li>
                                        <li>AA</li>
                                        <li>AAAA</li>
                                        <li>AAAAA</li>
                                        <li>AAAA</li>
                                        <li>AAAAAA</li>
                                    </ul>
                                </div>
                                <div>
                                    <h2>B </h2>
                                    <ul>
                                        <li>BB</li>
                                        <li>AABB</li>
                                        <li>AAAABB</li>
                                        <li>AAAABBBBBBBA</li>
                                        <li>AABBBBAA</li>
                                        <li>AAABBBBBBBBBBBA</li>
                                    </ul>
                                </div>
                                <div>
                                    <h2>C </h2>
                                    <ul>
                                        <li>AA</li>
                                        <li>CCCCCCCCC</li>
                                        <li>AAAA</li>
                                        <li>AAACCCCCCCCCCCCCCCCCCCAA</li>
                                        <li>AAACCCCCCCCCCCCCCCA</li>
                                        <li>AACCCCCCCCCCCCCAAAA</li>
                                    </ul>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                <div class="city_index">
                    <ul>
                        <li>A</li>
                        <li>B</li>
                        <li>C</li>
                        <li>D</li>
                        <li>E</li>
                        <li>F</li>
                        <li>G</li>
                        <li>H</li>
                        <li>J</li>
                        <li>K</li>
                        <li>L</li>
                        <li>M</li>
                        <li>N</li>
                        <li>P</li>
                        <li>Q</li>
                        <li>R</li>
                        <li>S</li>
                        <li>T</li>
                        <li>W</li>
                        <li>X</li>
                        <li>Y</li>
                        <li>Z</li>
                        
                    </ul>
                </div>

            </div>
</template>
<script>
export default {
    name:"City",
    
}
</script>

<style scoped>
    #content .city {
            margin-top: 100px;
            display: flex;
            width: 100%;
            top: 0;
            bottom: 0;
        }

        .city .city_list {
            flex: 1;
            overflow: auto;
            background: #fff5f0;
        }

        .city .city_list::-webkit-scrollbar {
            background-color: transparent;
            width: 0;
        }

        .city .city_hot {
            margin-top: 20px;
        }

        .city .city_hot h2 {
            padding-left: 15px;
            line-height: 30px;
            font-size: 14px;
            background: #f0f0f0;
            font-weight: 400;
        }

        .city .city_hot ul li {
            float: left;
            background: #fff;
            width: 29%;
            height: 33px;
            margin-top: 15px;
            margin-left: 3%;
            padding: 0 4px;
            border: 1px solid #e6e6e6;
            border-radius: 3px;
            line-height: 33px;
            text-align: center;
            box-sizing: border-box;
        }
        .city .city_sort{
            height: 100%;
        }
   

        .city .city_sort h2 {
            padding-left: 15px;
            line-height: 30px;
            font-size: 14px;
            background: #f0f0f0;
            font-weight: 400
        }

        .city .city_sort ul {
            padding-left: 10px;
            margin-top: 10px;
        }

        .city .city_sort ul li {
            line-height: 30px;
        }

        .city .city_index {
            width: 20px;
            /* position: fixed; */
            display: flex;
            right: 0;

      
        }
        .city .city_index>ul{
            position: fixed;
        }
        .city .city_index ul li{
            padding-top: 1px;

        }
</style>