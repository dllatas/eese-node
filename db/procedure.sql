CREATE DEFINER=`eese`@`%` PROCEDURE `generateRankingArea`(IN `pYear` INT, IN `pRegion` INT)
    LANGUAGE SQL
    NOT DETERMINISTIC
    CONTAINS SQL
    SQL SECURITY DEFINER
    COMMENT ''
BEGIN
    DECLARE vPivot,vPivotRank,vPivotPosi,vPosition,vIndicator,vCountry,vRanking INT;
    DECLARE vDone INT DEFAULT FALSE;
    DECLARE reg CURSOR FOR SELECT a.indicator_id,a.position,b.id FROM RANKING a,COUNTRY b,REGION_COUNTRY c WHERE a.year=pYear and a.country_id=b.id and b.id=c.country_id and c.region_id=pRegion ORDER BY a.indicator_id,a.position;
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET vDone = TRUE;
    SET vPosition=1;
    SET vPivotPosi=1;
    DELETE FROM RANKING_AREA
    WHERE year=pYear
    AND area_region_id=pRegion;
    OPEN reg;
    regLoop: LOOP
        FETCH reg INTO vIndicator,vRanking,vCountry;
        IF vDone THEN
            LEAVE regLoop;
        END IF;
        IF vPivot IS NULL THEN
            INSERT INTO RANKING_AREA(area_country_id,area_region_id,country_id,indicator_id,year,position)
            VALUES (vCountry,pRegion,vCountry,vIndicator,pYear,vPosition);
        ELSE
            IF vPivot=vIndicator THEN
                IF vPivotRank=vRanking THEN
                    SET vPivotPosi=vPivotPosi+1;
                ELSE
                    IF vPivotPosi>1 THEN
                        SET vPosition=vPosition+vPivotPosi;
                        SET vPivotPosi=1;
                    ELSE
                        SET vPosition=vPosition+1;
                    END IF;
                END IF;
                INSERT INTO RANKING_AREA(area_country_id,area_region_id,country_id,indicator_id,year,position)
                VALUES (vCountry,pRegion,vCountry,vIndicator,pYear,vPosition);
            ELSE
                SET vPosition=1;
                SET vPivotPosi=1;
                INSERT INTO RANKING_AREA(area_country_id,area_region_id,country_id,indicator_id,year,position)
                VALUES (vCountry,pRegion,vCountry,vIndicator,pYear,vPosition);
            END IF;
        END IF;
        SET vPivot=vIndicator;
        SET vPivotRank=vRanking;
    END LOOP;
END

CREATE DEFINER=`eese`@`%` PROCEDURE `generateAllRankingArea`(IN `pYear` INT)
    LANGUAGE SQL
    NOT DETERMINISTIC
    CONTAINS SQL
    SQL SECURITY DEFINER
    COMMENT ''
BEGIN
    DECLARE vYear,vRegion INT;
    DECLARE reg CURSOR FOR SELECT ID FROM REGION ORDER BY ID;
    OPEN reg;
    regLoop: LOOP
        FETCH reg INTO vRegion;
        CALL generateRankingArea(pYear,vRegion);
    END LOOP;
    CLOSE reg;
END