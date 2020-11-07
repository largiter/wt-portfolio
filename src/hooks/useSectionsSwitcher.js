import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { scroller } from 'react-scroll';
import useScroll from './useScroll';
import useWindowSize from './useWindowSize';
import { setDimension } from '../store/dimensions/dimensions.action';
import { DIMENSIONS_KEYS } from '../store/dimensions/dimensions.keys';
import { sections } from '../store/dimensions/sections.keys';
import getSectionId from '../utils/getSectionId';

const useSectionsSwitcher = () => {
  const dispatch = useDispatch();
  const { requestSection } = useSelector((state) => state.dimensions);
  const { scrollY } = useScroll();
  const [sectionAreas, setSectionAreas] = useState(null);
  const { windowWidth, windowHeight } = useWindowSize();

  const getSectionsAreas = (sectionId) => {
    const sectionEl = document.getElementById(sectionId);
    if (!sectionEl) return;

    return {
      id: sectionId,
      start: sectionEl.offsetTop - 10, // offset for scroller
      end: sectionEl.offsetTop + sectionEl.offsetHeight,
    };
  };

  const checkIsSection = ({ id, start, end }) => {
    if (id === 'contact') {
      return scrollY + windowHeight > start;
    }

    return scrollY > start && scrollY < end;
  };

  useEffect(() => {
    setSectionAreas(sections.map((section) => getSectionsAreas(section)));
  }, [windowWidth]);

  useEffect(() => {
    if (!requestSection) return;
    const sectionId = getSectionId(requestSection);

    dispatch(setDimension(DIMENSIONS_KEYS.currentSection, sectionId));

    scroller.scrollTo(sectionId, {
      smooth: true,
      delay: 0,
      duration: 1500,
    });
  }, [requestSection]);

  useEffect(() => {
    if (!sectionAreas) return;

    const currentSectionAreas = sectionAreas.filter((area) => checkIsSection(area));
    if (!currentSectionAreas || currentSectionAreas.length === 0) {
      dispatch(setDimension(DIMENSIONS_KEYS.currentSection, null));
      return;
    }

    const contactArea = currentSectionAreas.find((area) => area.id === 'contact');
    const currentSectionId = contactArea ? contactArea.id : currentSectionAreas[0].id;

    dispatch(setDimension(DIMENSIONS_KEYS.currentSection, currentSectionId));
  }, [sectionAreas, scrollY]);

  return null;
};

export default useSectionsSwitcher;
