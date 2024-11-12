<?php

class DynamicOptions{

    function users(){
        //* Simulates SQL Query.
        $example_array = array(
            ["uid"=>1, "username"=>"user1"],
            ["uid"=>2, "username"=>"user2"],
            ["uid"=>3, "username"=>"user3"]
        );

        foreach($example_array as $row){
            $pop_usernamnes[] = "{ value: \"$row[uid]\", label: \"$row[username]\" }";
        }
        ?>
        <script>
            var dynamic_options = {
                usernames: [
                    <?=implode(",",$pop_usernamnes)?>
                ],
                buildings: [
                    { value: "Building 1", label: "Building 1" },
                    { value: "Building 2", label: "Building 2" }
                ]
            };
        </script>
        <?
    }
}